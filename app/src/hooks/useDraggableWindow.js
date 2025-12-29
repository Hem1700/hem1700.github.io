import { useEffect, useRef, useState } from "react";

function readPersisted(persistKey, fallbackPos, fallbackSize) {
  if (!persistKey || typeof window === "undefined") return { position: fallbackPos, size: fallbackSize };
  try {
    const raw = window.localStorage.getItem(persistKey);
    if (!raw) return { position: fallbackPos, size: fallbackSize };
    const parsed = JSON.parse(raw);
    return {
      position: parsed.position || fallbackPos,
      size: parsed.size || fallbackSize,
    };
  } catch (e) {
    return { position: fallbackPos, size: fallbackSize };
  }
}

function writePersisted(persistKey, position, size) {
  if (!persistKey || typeof window === "undefined") return;
  try {
    const payload = JSON.stringify({ position, size });
    window.localStorage.setItem(persistKey, payload);
  } catch (e) {
    // ignore
  }
}

export function useDraggableWindow(initialPosition = { x: 0, y: 0 }, initialSize, persistKey) {
  const nodeRef = useRef(null);
  const handleRef = useRef(null);
  const resizerRef = useRef(null);

  const persisted = readPersisted(persistKey, initialPosition, initialSize);
  const [position, setPosition] = useState(persisted.position);
  const [size, setSize] = useState(persisted.size);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);

  const posRef = useRef(persisted.position);
  const sizeRef = useRef(persisted.size);

  useEffect(() => {
    writePersisted(persistKey, position, size);
  }, [position, size, persistKey]);

  useEffect(() => {
    if (!persistKey || typeof window === "undefined") return () => {};
    const onReset = (event) => {
      if (event?.detail && event.detail !== "all" && event.detail !== persistKey) return;
      posRef.current = initialPosition;
      sizeRef.current = initialSize;
      setPosition(initialPosition);
      setSize(initialSize);
      try {
        window.localStorage.removeItem(persistKey);
      } catch (e) {
        // ignore
      }
    };
    window.addEventListener("hud:reset-layout", onReset);
    return () => window.removeEventListener("hud:reset-layout", onReset);
  }, [persistKey, initialPosition, initialSize]);

  useEffect(() => {
    const node = nodeRef.current;
    const handle = handleRef.current || node;
    if (!node || !handle) return () => {};

    let startPointer = { x: 0, y: 0 };
    let startPos = posRef.current;

    const onPointerDown = (e) => {
      if (e.button && e.button !== 0) return;
      startPointer = { x: e.clientX, y: e.clientY };
      startPos = posRef.current;
      setIsDragging(true);
      document.addEventListener("pointermove", onPointerMove);
      document.addEventListener("pointerup", onPointerUp);
    };

    const onPointerMove = (e) => {
      const delta = { x: e.clientX - startPointer.x, y: e.clientY - startPointer.y };
      const next = { x: startPos.x + delta.x, y: startPos.y + delta.y };
      posRef.current = next;
      setPosition(next);
    };

    const onPointerUp = () => {
      setIsDragging(false);
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerup", onPointerUp);
    };

    handle.addEventListener("pointerdown", onPointerDown);

    return () => {
      handle.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerup", onPointerUp);
    };
  }, []);

  useEffect(() => {
    const node = nodeRef.current;
    const resizer = resizerRef.current;
    if (!node || !resizer) return () => {};

    let startPointer = { x: 0, y: 0 };
    let startSize = sizeRef.current || { width: node.offsetWidth, height: node.offsetHeight };

    const onPointerDown = (e) => {
      if (e.button && e.button !== 0) return;
      startPointer = { x: e.clientX, y: e.clientY };
      startSize = sizeRef.current || { width: node.offsetWidth, height: node.offsetHeight };
      setIsResizing(true);
      document.addEventListener("pointermove", onPointerMove);
      document.addEventListener("pointerup", onPointerUp);
    };

    const onPointerMove = (e) => {
      const delta = { x: e.clientX - startPointer.x, y: e.clientY - startPointer.y };
      const next = {
        width: Math.max(320, startSize.width + delta.x),
        height: Math.max(260, startSize.height + delta.y),
      };
      sizeRef.current = next;
      setSize(next);
    };

    const onPointerUp = () => {
      setIsResizing(false);
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerup", onPointerUp);
    };

    resizer.addEventListener("pointerdown", onPointerDown);

    return () => {
      resizer.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerup", onPointerUp);
    };
  }, []);

  return {
    nodeRef,
    handleRef,
    resizerRef,
    position,
    setPosition,
    size,
    setSize,
    isDragging,
    isResizing,
  };
}
