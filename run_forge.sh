#!/bin/bash
cd /Users/hemparekh/Desktop/forge_mobile
xcrun simctl boot "iPhone 16" 2>/dev/null || xcrun simctl boot "iPhone 15" 2>/dev/null || true
open -a Simulator
sleep 4
flutter run -d "iPhone 16" 2>/dev/null || flutter run -d "iPhone 15" 2>/dev/null || flutter run
