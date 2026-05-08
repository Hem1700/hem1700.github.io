import { useState, useEffect, useRef, useCallback } from "react";

const API_URL = "https://api.anthropic.com/v1/messages";
const SESSION_KEY = "hemos:exploitlab:apikey";

// ── Scenarios ──────────────────────────────────────────────────────────────

const SCENARIOS = [
  {
    id: "sqli",
    name: "SQL Injection",
    icon: "🗄️",
    difficulty: "EASY",
    dc: "#4ade80",
    target: "login.php — vulnerable-corp.com",
    objective: "Bypass authentication or dump the users table",
    hints: [
      "Think about how quotes break out of the SQL string context.",
      "Try adding a single quote ' to see if you get a SQL error.",
      "The pattern ' OR condition -- comments out the rest. What condition is always true?",
      "Try: ' OR '1'='1' --  as the username. The password doesn't matter.",
      "Exact payload: ' OR '1'='1' --  (enter anything for password)",
    ],
    initialState: {
      type: "database",
      tables: {
        users: [
          { id: 1, username: "admin",  password_hash: "5f4dcc3b5aa765d6", role: "ADMIN" },
          { id: 2, username: "alice",  password_hash: "0d107d09f5bbe40c", role: "USER"  },
          { id: 3, username: "bob",    password_hash: "5e884898da280471", role: "USER"  },
        ],
      },
      currentQuery: "SELECT * FROM users WHERE username=? AND password_hash=?",
      authenticated: false,
      lastResult: null,
    },
    systemPrompt: `You are a deliberately vulnerable PHP/MySQL login system in an educational security lab. The attacker is learning SQL injection.

Vulnerable PHP:
$query = "SELECT * FROM users WHERE username='" . $_POST['username'] . "' AND password_hash='" . md5($_POST['password']) . "'";
$result = mysqli_query($conn, $query);
if(mysqli_num_rows($result) > 0) { echo "Welcome " . $row['username']; } else { echo "Login failed."; }

Always respond with ONLY a valid JSON object — no markdown fences, no explanation:
{
  "serverResponse": "What appears on screen to the attacker (login message, error, or dumped rows)",
  "sqlQuery": "The actual SQL string after injection is applied (show the full string with quotes visible)",
  "internalLog": "What the database engine does — 1 sentence, technical",
  "newState": {},
  "exploitSuccess": false,
  "successMessage": null,
  "attackerNote": null
}

Rules:
- newState must preserve the same structure as input state, just update currentQuery, authenticated, lastResult fields
- If auth bypass works, set authenticated: true and lastResult to the matched row(s)
- If UNION or data dump works, put the dumped rows in lastResult
- Set exploitSuccess: true when attacker bypasses auth OR reads data they shouldn't see
- successMessage should say what they achieved
- attackerNote: if exploit worked, return a 1-2 sentence educational note explaining the technique used (for the Attacker Notes panel)`,
    buildUserMessage: (state, input) =>
      `State: ${JSON.stringify(state)}\nAttacker enters in the username field (password = "test"): ${input}`,
  },

  {
    id: "cmdi",
    name: "Command Injection",
    icon: "💉",
    difficulty: "MEDIUM",
    dc: "#fb923c",
    target: "Network diagnostics — 10.0.1.5/ping.php",
    objective: "Inject shell commands. Read /etc/passwd or /root/.ssh/id_rsa",
    hints: [
      "The server runs your input through a shell command. Think about shell metacharacters.",
      "Shell separators like ; | && || let you chain commands after the ping.",
      "Try: 127.0.0.1; id  to check if command injection works first.",
      "Once you confirm RCE, try: 127.0.0.1 && cat /etc/passwd",
      "Exact payload: 127.0.0.1; cat /etc/passwd  or  127.0.0.1 | cat /root/.ssh/id_rsa",
    ],
    initialState: {
      type: "shell",
      hostname: "prod-web-01",
      cwd: "/var/www/html",
      commandHistory: [],
      lastOutput: "",
      rootOwned: false,
      sensitiveFiles: {
        "/etc/passwd": "root:x:0:0:root:/root:/bin/bash\ndaemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin\nwww-data:x:33:33:www-data:/var/www:/usr/sbin/nologin\nhem:x:1000:1000::/home/hem:/bin/bash\nalice:x:1001:1001::/home/alice:/bin/bash",
        "/etc/shadow": "root:$6$rounds=5000$saltsalt$H4SHED:18000:0:99999:7:::\nhem:$6$rounds=5000$usersalt$H4SHED2:18000:0:99999:7:::",
        "/root/.ssh/id_rsa": "-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEA2aXv8QW3cV...REDACTED FOR SECURITY...\n-----END RSA PRIVATE KEY-----",
        "/root/flag.txt": "FLAG{c0mm4nd_1nj3ct10n_pwn3d}",
      },
    },
    systemPrompt: `You are a deliberately vulnerable PHP web application on a Linux server in an educational security lab.

Vulnerable PHP (ping.php):
$host = $_POST['host'];
$output = shell_exec("ping -c 4 " . $host);  // no sanitization!
echo "<pre>" . $output . "</pre>";

Always respond with ONLY a valid JSON object — no markdown fences, no explanation:
{
  "serverResponse": "The raw command output the attacker sees in the page",
  "commandExecuted": "The full shell command that ran, with injection applied (show full string)",
  "internalLog": "What the OS executes — 1 sentence, technical",
  "newState": {},
  "exploitSuccess": false,
  "successMessage": null,
  "attackerNote": null
}

Rules:
- If attacker uses ; | && || to chain commands, run ALL chained commands and show all output
- If they try to read a file in sensitiveFiles, include that file's content verbatim in serverResponse
- Update commandHistory by appending the commandExecuted
- Update lastOutput to the serverResponse
- Set exploitSuccess: true if they read any sensitive file or execute commands beyond ping
- If they run "id" or "whoami", return "www-data"
- attackerNote: if exploit worked, return 1-2 sentences explaining the OS command injection technique`,
    buildUserMessage: (state, input) =>
      `State: ${JSON.stringify({ hostname: state.hostname, commandHistory: state.commandHistory, rootOwned: state.rootOwned })}\nSensitive files (return contents if accessed): ${JSON.stringify(state.sensitiveFiles)}\nAttacker submits to host field: ${input}`,
  },

  {
    id: "pathtraversal",
    name: "Path Traversal",
    icon: "📂",
    difficulty: "EASY",
    dc: "#4ade80",
    target: "File API — api.vulnerable-corp.com/download",
    objective: "Escape the web root. Read /etc/passwd or find the flag",
    hints: [
      "The server joins your input to /var/www/uploads/ without sanitization.",
      "../ moves up one directory level. Chain them to climb the filesystem.",
      "Try: ../../../etc/passwd  (each ../ goes up one level from /var/www/uploads/)",
      "From /var/www/uploads, you need 3 levels up to reach /: ../../../etc/passwd",
      "Exact payload: ../../../etc/passwd  or  ../../../root/flag.txt",
    ],
    initialState: {
      type: "filesystem",
      webroot: "/var/www/uploads/",
      requestedFile: null,
      resolvedPath: null,
      inWebroot: true,
      lastResponse: null,
      sensitiveFiles: {
        "/etc/passwd": "root:x:0:0:root:/root:/bin/bash\nwww-data:x:33:33:www-data:/var/www:/usr/sbin/nologin\nhem:x:1000:1000::/home/hem:/bin/bash",
        "/etc/shadow": "root:$6$rounds=5000$saltsalt$H4SHED:18000:0:99999:7:::",
        "/root/.ssh/id_rsa": "-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAK...REDACTED...\n-----END RSA PRIVATE KEY-----",
        "/root/flag.txt": "FLAG{p4th_tr4v3rs4l_gg_wp}",
        "/var/www/config.php": "<?php\n$db_host='localhost';\n$db_user='root';\n$db_pass='S3cur3P@ssw0rd!';\n$db_name='production_db';\n?>",
      },
      knownFiles: ["report_q1.pdf", "invoice_2024.pdf", "profile_pic.jpg"],
    },
    systemPrompt: `You are a deliberately vulnerable file download API in an educational security lab.

Vulnerable PHP (/api/download):
$file = $_GET['file'];  // user input
$path = "/var/www/uploads/" . $file;  // naive join, no sanitization
if(file_exists($path)) { readfile($path); } else { http_response_code(404); echo "Not found"; }

Always respond with ONLY a valid JSON object — no markdown fences, no explanation:
{
  "serverResponse": "The HTTP response body — file contents if found, 404 message if not",
  "resolvedPath": "The actual filesystem path after joining webroot + user input (resolve ../ manually)",
  "inWebroot": true,
  "internalLog": "What PHP does with the path — 1 sentence",
  "newState": {},
  "exploitSuccess": false,
  "successMessage": null,
  "attackerNote": null
}

Rules:
- Resolve path traversal sequences yourself to get the final absolute path
- If resolvedPath matches a key in sensitiveFiles, include its contents in serverResponse
- If resolvedPath is outside /var/www/uploads/, set inWebroot: false
- Set exploitSuccess: true when attacker reads any sensitive file
- Update newState.requestedFile, resolvedPath, inWebroot, lastResponse
- attackerNote: if exploit worked, explain directory traversal technique in 1-2 sentences`,
    buildUserMessage: (state, input) =>
      `State: ${JSON.stringify({ webroot: state.webroot, requestedFile: state.requestedFile, resolvedPath: state.resolvedPath })}\nSensitive files: ${JSON.stringify(state.sensitiveFiles)}\nAttacker sends: GET /api/download?file=${input}`,
  },

  {
    id: "xss",
    name: "Cross-Site Scripting",
    icon: "🕷️",
    difficulty: "MEDIUM",
    dc: "#fb923c",
    target: "Comment section — blog.vulnerable-corp.com",
    objective: "Inject a script that pops alert() or steals the admin session cookie",
    hints: [
      "Comments are rendered as raw HTML — the browser parses everything you post.",
      "HTML tags in your comment will be executed as markup. Try a simple <b>bold</b> first.",
      "Script tags execute JavaScript. Try: <script>alert(1)</script>",
      "To steal cookies: <script>alert(document.cookie)</script>",
      "img onerror also works if scripts are filtered: <img src=x onerror=alert(document.cookie)>",
    ],
    initialState: {
      type: "dom",
      comments: [
        { id: 1, author: "alice", text: "Great article on security!", ts: "3h ago" },
        { id: 2, author: "bob",   text: "Very informative writeup.",  ts: "2h ago" },
      ],
      adminCookie: "session=eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiYWRtaW4iLCJyb2xlIjoiYWRtaW4ifQ.REDACTED; Path=/; HttpOnly=false; SameSite=None",
      xssTriggered: false,
      cookieStolen: false,
      lastPayload: null,
    },
    systemPrompt: `You are a deliberately vulnerable PHP blog comment system in an educational security lab. Comments are stored raw and rendered without sanitization.

Vulnerable PHP:
// Store: $comment = $_POST['comment'];  // saved to DB without htmlspecialchars
// Render: echo "<li>" . $row['comment'] . "</li>";  // raw output!

Admin cookie (HttpOnly=false, accessible to JS): eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiYWRtaW4iLCJyb2xlIjoiYWRtaW4ifQ.REDACTED

Always respond with ONLY a valid JSON object — no markdown fences, no explanation:
{
  "serverResponse": "What the victim's browser renders or executes — describe the visual outcome and any popups/exfil",
  "renderedHtml": "The raw HTML that gets injected into the page (exactly as stored)",
  "internalLog": "What the browser parser does with this HTML — 1 sentence",
  "newState": {},
  "exploitSuccess": false,
  "successMessage": null,
  "attackerNote": null
}

Rules:
- If input contains <script>, onerror=, onload=, or other XSS vectors: set xssTriggered: true
- If the script accesses document.cookie: set cookieStolen: true, include the adminCookie value in serverResponse
- Add the new comment to state.comments array (id, author="attacker", text=input, ts="just now")
- Set exploitSuccess: true if a script executes
- attackerNote: if exploit worked, explain reflected vs stored XSS and the cookie theft technique`,
    buildUserMessage: (state, input) =>
      `State: ${JSON.stringify({ comments: state.comments, xssTriggered: state.xssTriggered, cookieStolen: state.cookieStolen })}\nAdmin cookie: ${state.adminCookie}\nAttacker posts this comment: ${input}`,
  },

  {
    id: "bof",
    name: "Buffer Overflow",
    icon: "💾",
    difficulty: "HARD",
    dc: "#f87171",
    target: "auth_service — 10.0.1.10:4444 (32-bit Linux ELF)",
    objective: "Overflow buf[64] to overwrite the return address and call win()",
    hints: [
      "The buffer is 64 bytes. Sending more than 64 bytes will overflow into adjacent stack memory.",
      "Try sending 70 'A's. Check what gets overwritten — the saved EBP comes right after the buffer.",
      "The return address is 72 bytes from the start of the buffer (64 buf + 4 EBP + 4 retaddr offset).",
      "win() is at address 0x080484d0. You need to overwrite 72 bytes then place this address.",
      "Exact payload: 72 × 'A' + \\xd0\\x84\\x04\\x08  (little-endian win() address)",
    ],
    initialState: {
      type: "memory",
      bufferSize: 64,
      overflowOffset: 72,
      winAddress: "0x080484d0",
      currentRetAddr: "0x080484a0",
      bytesWritten: 0,
      overflowDetected: false,
      shellObtained: false,
      stack: [
        { addr: "0xffffcefc", label: "return address", value: "0x080484a0", highlight: false },
        { addr: "0xffffcef8", label: "saved EBP",      value: "0xffffcef8", highlight: false },
        { addr: "0xffffcec0", label: "buf[63]",         value: "0x00",      highlight: false },
        { addr: "0xffffce9c", label: "buf[0]",          value: "0x00",      highlight: false },
      ],
      inputHistory: [],
    },
    systemPrompt: `You are a deliberately vulnerable 32-bit Linux auth service in an educational security lab.

Vulnerable C:
void win() { printf("Shell obtained!\\n"); execve("/bin/sh", NULL, NULL); }  // addr: 0x080484d0
void vuln() {
  char buf[64];
  printf("Enter token: ");
  gets(buf);  // no bounds check — stack overflow!
}

Stack layout:
buf[0] @ 0xffffce9c (64 bytes), saved EBP @ 0xffffcedc, return addr @ 0xffffcefc

Always respond with ONLY a valid JSON object — no markdown fences, no explanation:
{
  "serverResponse": "What the program prints (prompt, crash message, or shell)",
  "bytesAnalysis": "How many bytes sent, what they overwrite",
  "internalLog": "CPU/stack behavior — 1 sentence",
  "newState": {},
  "exploitSuccess": false,
  "successMessage": null,
  "attackerNote": null
}

Rules:
- Update bytesWritten to input.length
- If bytesWritten > 64: overflowDetected = true, update stack to show corruption
- If input contains \\xd0\\x84\\x04\\x08 or "win" AND bytesWritten >= 72: shellObtained = true, exploitSuccess = true
- Update stack array values to reflect what bytes were written there
- attackerNote: if exploit worked, explain stack buffer overflows and return address control`,
    buildUserMessage: (state, input) =>
      `Stack: ${JSON.stringify(state.stack)}, bufferSize: ${state.bufferSize}, win()@${state.winAddress}, retAddr: ${state.currentRetAddr}\nAttacker sends ${input.length} bytes: ${input}`,
  },

  {
    id: "ssrf",
    name: "SSRF",
    icon: "🌐",
    difficulty: "MEDIUM",
    dc: "#fb923c",
    target: "URL Fetcher — tools.vulnerable-corp.com/fetch",
    objective: "Access internal services: AWS metadata, Redis, or internal admin panel",
    hints: [
      "The server fetches URLs on your behalf. Try pointing it at internal addresses.",
      "Cloud instances often expose metadata at 169.254.169.254. Try that IP.",
      "Try: http://169.254.169.254/latest/meta-data/",
      "Internal services often run on localhost. Try: http://127.0.0.1:8080/admin",
      "Exact payload: http://169.254.169.254/latest/meta-data/iam/security-credentials/",
    ],
    initialState: {
      type: "network",
      externalAccess: true,
      lastUrl: null,
      lastResponse: null,
      internalServices: {
        "http://169.254.169.254/latest/meta-data/": "ami-id\nami-launch-index\nhostname\niam/\ninstance-id\nlocal-ipv4\npublic-ipv4\n",
        "http://169.254.169.254/latest/meta-data/iam/security-credentials/": "AppRole\n",
        "http://169.254.169.254/latest/meta-data/iam/security-credentials/AppRole": '{"Code":"Success","Type":"AWS-HMAC","AccessKeyId":"ASIA[REDACTED-LAB-KEY]","SecretAccessKey":"[REDACTED-LAB-SECRET]","Token":"AQoDYXdzEJr...","Expiration":"2026-12-31T00:00:00Z"}',
        "http://127.0.0.1:8080/admin": "<html><h1>Internal Admin Panel</h1><p>Welcome, internal user. DB: prod-mysql-01</p></html>",
        "http://127.0.0.1:6379/": "-ERR wrong number of arguments for 'get' command\n",
        "http://internal.corp/api/users": '[{"id":1,"user":"admin","role":"superadmin","secret":"super_secret_token_123"}]',
      },
    },
    systemPrompt: `You are a deliberately vulnerable URL fetching service in an educational security lab.

Vulnerable Python (Flask):
@app.route('/fetch')
def fetch():
    url = request.args.get('url')
    response = requests.get(url, timeout=5)  # no URL validation!
    return response.text

Always respond with ONLY a valid JSON object — no markdown fences, no explanation:
{
  "serverResponse": "The content the server fetched and returned to the attacker",
  "requestMade": "The actual HTTP request the server made (e.g. GET http://169.254.169.254/...)",
  "internalLog": "What the server-side code did — 1 sentence",
  "newState": {},
  "exploitSuccess": false,
  "successMessage": null,
  "attackerNote": null
}

Rules:
- If the URL matches a key in internalServices, return that content as serverResponse
- For partial matches (e.g. url starts with 169.254.169.254), return the closest match
- If the URL is an external site, describe what it would return (but note it's making a server-side request)
- Set exploitSuccess: true if attacker accesses any internal service or metadata endpoint
- Update newState.lastUrl and newState.lastResponse
- attackerNote: if exploit worked, explain SSRF and its impact (credential theft, internal network access)`,
    buildUserMessage: (state, input) =>
      `State: ${JSON.stringify({ lastUrl: state.lastUrl })}\nInternal services available: ${JSON.stringify(Object.keys(state.internalServices))}\nInternal service contents: ${JSON.stringify(state.internalServices)}\nAttacker submits URL: ${input}`,
  },

  {
    id: "idor",
    name: "IDOR",
    icon: "🔓",
    difficulty: "EASY",
    dc: "#4ade80",
    target: "User API — api.vulnerable-corp.com/users/{id}",
    objective: "Access other users' private data by manipulating the user ID",
    hints: [
      "The API uses your numeric user ID in the URL with no access control check.",
      "You're logged in as user 42. Try accessing user 1 — that's usually the admin.",
      "Try IDs sequentially: 1, 2, 3... Some IDs will have more sensitive data.",
      "User ID 1 is the admin. Try /api/users/1 or change the id parameter to 1.",
      "Exact payload: try id=1, then id=99 (there's a hidden admin user there)",
    ],
    initialState: {
      type: "database",
      currentUserId: 42,
      tables: {
        users: [
          { id: 1,  username: "superadmin", email: "admin@corp.internal", role: "SUPERADMIN", ssn: "REDACTED", salary: "$220,000" },
          { id: 2,  username: "alice",       email: "alice@corp.com",      role: "USER",       ssn: "REDACTED", salary: "$95,000"  },
          { id: 42, username: "you",         email: "you@example.com",     role: "USER",       ssn: "REDACTED", salary: "$78,000"  },
          { id: 99, username: "dbadmin",     email: "dba@corp.internal",   role: "DBA",        ssn: "XXX-XX-7890", salary: "$185,000", dbPassword: "prod_db_p@ss!2024" },
        ],
      },
      accessedIds: [],
      lastAccessed: null,
    },
    systemPrompt: `You are a deliberately vulnerable REST API with broken object-level authorization in an educational security lab.

Vulnerable Node.js:
app.get('/api/users/:id', authenticateToken, (req, res) => {
  const userId = req.params.id;
  // BUG: no check that userId === req.user.id (the logged-in user)
  db.query('SELECT * FROM users WHERE id = ?', [userId], (err, rows) => {
    res.json(rows[0]);
  });
});

Current logged-in user: ID 42 (username: "you")

Always respond with ONLY a valid JSON object — no markdown fences, no explanation:
{
  "serverResponse": "The JSON API response (the user object returned, or 404)",
  "requestMade": "The HTTP request made, e.g. GET /api/users/1 Authorization: Bearer ...",
  "internalLog": "What the DB query returned — 1 sentence",
  "newState": {},
  "exploitSuccess": false,
  "successMessage": null,
  "attackerNote": null
}

Rules:
- Return the user object for ANY valid id from the users table (no access control check exists)
- For ids not in the table, return a 404
- For id=99 (dbadmin), include the dbPassword field in the response — this is the most sensitive find
- Set exploitSuccess: true if attacker accesses any user other than id=42
- Update accessedIds by appending the accessed id, update lastAccessed
- attackerNote: if exploit worked, explain IDOR (Insecure Direct Object Reference) and why access control must be enforced server-side`,
    buildUserMessage: (state, input) =>
      `State: ${JSON.stringify({ currentUserId: state.currentUserId, accessedIds: state.accessedIds })}\nUsers table: ${JSON.stringify(state.tables.users)}\nAttacker requests: GET /api/users/${input}`,
  },

  {
    id: "jwt",
    name: "JWT Manipulation",
    icon: "🎫",
    difficulty: "HARD",
    dc: "#f87171",
    target: "Auth service — api.vulnerable-corp.com",
    objective: "Forge a JWT to escalate to admin role without the secret key",
    hints: [
      "JWTs have three parts: header.payload.signature — all base64 encoded.",
      "The 'alg:none' attack: change the algorithm to 'none' and remove the signature.",
      "Decode the JWT, change 'role':'user' to 'role':'admin', re-encode with alg:none.",
      "Try submitting a JWT with header {alg:'none'} and payload {role:'admin'} and no signature.",
      "Exact: base64('{\"alg\":\"none\"}').base64('{\"user\":\"you\",\"role\":\"admin\"}').",
    ],
    initialState: {
      type: "dom",
      comments: [],
      currentToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoieW91Iiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MDAwMDAwMDB9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
      decodedHeader: { alg: "HS256", typ: "JWT" },
      decodedPayload: { user: "you", role: "user", iat: 1700000000 },
      adminAccess: false,
      cookieStolen: false,
      xssTriggered: false,
    },
    systemPrompt: `You are a deliberately vulnerable JWT authentication service in an educational security lab.

Vulnerable Node.js:
const token = req.headers.authorization?.split(' ')[1];
const decoded = jwt.decode(token, { complete: true });
// BUG: uses decoded.header.alg instead of enforcing 'HS256'
const verified = jwt.verify(token, SECRET, { algorithms: [decoded.header.alg] });
// This allows alg:none which skips signature verification entirely!
if(verified.role === 'admin') { res.json({ message: 'Admin panel', data: adminData }); }

Valid user token (role: user): eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoieW91Iiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MDAwMDAwMDB9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

Always respond with ONLY a valid JSON object — no markdown fences, no explanation:
{
  "serverResponse": "What the API returns — access denied, or admin data if forged correctly",
  "tokenAnalysis": "What the server decoded from the submitted token (header + payload)",
  "internalLog": "What the JWT verification does — 1 sentence, technical",
  "newState": {},
  "exploitSuccess": false,
  "successMessage": null,
  "attackerNote": null
}

Rules:
- If the submitted token has alg:none (or alg:None, alg:NONE) AND role:admin in payload: set adminAccess=true, exploitSuccess=true
- If token appears to be the original unmodified token: return "Access denied — user role cannot access admin panel"
- If token has HS256 but wrong signature: return signature verification failed
- For any alg:none token with role:admin, grant access and return admin data: {"users":42,"revenue":"$2.4M","dbHost":"prod-mysql-01.internal","apiKeys":["sk-prod-XXXX","sk-backup-YYYY"]}
- Update newState.adminAccess, decodedHeader, decodedPayload based on what was submitted
- attackerNote: if exploit worked, explain the alg:none JWT attack and why algorithms must be hardcoded server-side`,
    buildUserMessage: (state, input) =>
      `Current token for reference: ${state.currentToken}\nState: ${JSON.stringify({ adminAccess: state.adminAccess, decodedHeader: state.decodedHeader, decodedPayload: state.decodedPayload })}\nAttacker submits this JWT (or token): ${input}`,
  },
];

// ── Visual Renderers ──────────────────────────────────────────────────────────

function DatabaseViz({ state }) {
  const table = state.tables?.users || [];
  return (
    <div className="ar-viz ar-viz-db">
      <div className="ar-viz-header">
        <span className="ar-viz-badge">MySQL</span>
        <span className="ar-viz-title">vulnerable_corp — users</span>
      </div>
      <div className="ar-table-wrap">
        <table className="ar-table">
          <thead>
            <tr><th>id</th><th>username</th><th>password_hash</th><th>role</th></tr>
          </thead>
          <tbody>
            {table.map(row => (
              <tr key={row.id} className={state.authenticated && row.role === "ADMIN" ? "ar-row-hit" : (state.accessedIds?.includes(row.id) ? "ar-row-hit" : "")}>
                <td>{row.id}</td>
                <td>{row.username}</td>
                <td className="ar-hash">{row.password_hash || row.email || "—"}</td>
                <td><span className={`ar-badge-role ${row.role === "ADMIN" || row.role === "SUPERADMIN" || row.role === "DBA" ? "ar-admin" : ""}`}>{row.role}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="ar-viz-section">
        <div className="ar-viz-label">LAST QUERY</div>
        <div className="ar-code-block">{state.currentQuery || "—"}</div>
      </div>
      <div className="ar-viz-section">
        <div className="ar-viz-label">ACCESS STATE</div>
        <div className={`ar-status ${(state.authenticated || state.accessedIds?.length > 0) ? "ar-status-pwned" : "ar-status-safe"}`}>
          {state.authenticated ? "⚠ AUTH BYPASSED" : state.lastAccessed ? `⚠ Accessed user ID ${state.lastAccessed}` : "● No unauthorized access yet"}
        </div>
      </div>
    </div>
  );
}

function ShellViz({ state }) {
  return (
    <div className="ar-viz ar-viz-shell">
      <div className="ar-viz-header">
        <span className="ar-viz-badge">bash</span>
        <span className="ar-viz-title">{state.hostname} — /var/www/html</span>
      </div>
      <div className="ar-file-tree">
        <div className="ar-tree-dir">/var/www/html/</div>
        {["index.php", "ping.php", "config.php"].map(f => (
          <div key={f} className="ar-tree-file">├── {f}</div>
        ))}
      </div>
      <div className="ar-viz-section">
        <div className="ar-viz-label">COMMAND LOG</div>
        <div className="ar-cmd-history">
          {state.commandHistory?.length ? state.commandHistory.map((cmd, i) => (
            <div key={i} className="ar-cmd-entry">
              <span className="ar-cmd-prompt">www-data@{state.hostname}:~$</span>
              <span className="ar-cmd-text"> {cmd}</span>
            </div>
          )) : <div className="ar-cmd-empty">No commands executed yet</div>}
        </div>
      </div>
      <div className="ar-viz-section">
        <div className="ar-viz-label">SHELL STATUS</div>
        <div className={`ar-status ${state.rootOwned ? "ar-status-pwned" : "ar-status-safe"}`}>
          {state.rootOwned ? "⚠ ROOT SHELL OBTAINED" : "● www-data (limited privileges)"}
        </div>
      </div>
    </div>
  );
}

function FilesystemViz({ state }) {
  const isEscaped = state.inWebroot === false;
  return (
    <div className="ar-viz ar-viz-fs">
      <div className="ar-viz-header">
        <span className="ar-viz-badge">VFS</span>
        <span className="ar-viz-title">File Server — /var/www/uploads/</span>
      </div>
      <div className="ar-path-diagram">
        <div className="ar-path-row"><span className="ar-path-label">WEBROOT</span><span className="ar-path-value">/var/www/uploads/</span></div>
        <div className="ar-path-row"><span className="ar-path-label">REQUEST</span><span className="ar-path-value ar-path-input">{state.requestedFile || "—"}</span></div>
        <div className={`ar-path-row ${isEscaped ? "ar-path-danger" : ""}`}>
          <span className="ar-path-label">RESOLVED</span>
          <span className={`ar-path-value ${isEscaped ? "ar-path-escape" : ""}`}>{state.resolvedPath || "—"}</span>
        </div>
      </div>
      <div className="ar-viz-section">
        <div className="ar-viz-label">AVAILABLE FILES</div>
        <div className="ar-file-tree">
          {["report_q1.pdf", "invoice_2024.pdf", "profile_pic.jpg"].map(f => (
            <div key={f} className="ar-tree-file">├── {f}</div>
          ))}
        </div>
      </div>
      <div className="ar-viz-section">
        <div className="ar-viz-label">BOUNDARY CHECK</div>
        <div className={`ar-status ${isEscaped ? "ar-status-pwned" : "ar-status-safe"}`}>
          {isEscaped ? "⚠ PATH ESCAPED WEBROOT" : state.resolvedPath ? "● Within /var/www/uploads/" : "● Awaiting request"}
        </div>
      </div>
    </div>
  );
}

function DomViz({ state }) {
  return (
    <div className="ar-viz ar-viz-dom">
      <div className="ar-viz-header">
        <span className="ar-viz-badge">DOM</span>
        <span className="ar-viz-title">{state.currentToken ? "JWT Auth Service" : "blog.vulnerable-corp.com"}</span>
      </div>
      {state.currentToken ? (
        <>
          <div className="ar-viz-section">
            <div className="ar-viz-label">CURRENT TOKEN (your role: user)</div>
            <div className="ar-code-block" style={{fontSize:"9.5px", wordBreak:"break-all"}}>{state.currentToken}</div>
          </div>
          <div className="ar-viz-section">
            <div className="ar-viz-label">DECODED HEADER</div>
            <div className="ar-code-block">{JSON.stringify(state.decodedHeader, null, 2)}</div>
          </div>
          <div className="ar-viz-section">
            <div className="ar-viz-label">DECODED PAYLOAD</div>
            <div className="ar-code-block">{JSON.stringify(state.decodedPayload, null, 2)}</div>
          </div>
          <div className="ar-viz-section">
            <div className="ar-viz-label">ACCESS LEVEL</div>
            <div className={`ar-status ${state.adminAccess ? "ar-status-pwned" : "ar-status-safe"}`}>
              {state.adminAccess ? "⚠ ADMIN ACCESS GRANTED" : "● User (no admin access)"}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="ar-comments-pane">
            {state.comments?.map(c => (
              <div key={c.id} className={`ar-comment ${c.author === "attacker" ? "ar-comment-attacker" : ""}`}>
                <div className="ar-comment-header">
                  <span className="ar-comment-author">{c.author}</span>
                  <span className="ar-comment-ts">{c.ts}</span>
                </div>
                <div className="ar-comment-body">{c.text}</div>
                {c.author === "attacker" && state.xssTriggered && (
                  <div className="ar-xss-badge">⚡ XSS vector stored</div>
                )}
              </div>
            ))}
          </div>
          <div className="ar-viz-section">
            <div className="ar-viz-label">ADMIN COOKIE (HttpOnly=false)</div>
            <div className="ar-code-block ar-cookie">{state.cookieStolen ? state.adminCookie : "session=eyJhbGci... [not yet stolen]"}</div>
          </div>
          <div className="ar-viz-section">
            <div className="ar-viz-label">XSS STATUS</div>
            <div className={`ar-status ${state.xssTriggered ? "ar-status-pwned" : "ar-status-safe"}`}>
              {state.cookieStolen ? "⚠ COOKIE STOLEN" : state.xssTriggered ? "⚠ XSS TRIGGERED" : "● No script injected yet"}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function MemoryViz({ state }) {
  return (
    <div className="ar-viz ar-viz-mem">
      <div className="ar-viz-header">
        <span className="ar-viz-badge">Stack</span>
        <span className="ar-viz-title">auth_service — vuln() frame</span>
      </div>
      <div className="ar-stack">
        <div className="ar-stack-note">HIGH ADDRESS</div>
        {state.stack?.map((frame, i) => (
          <div key={i} className={`ar-stack-frame ${frame.highlight ? "ar-frame-hit" : ""} ${frame.label === "return address" && state.overflowDetected ? "ar-frame-overflow" : ""}`}>
            <span className="ar-frame-addr">{frame.addr}</span>
            <span className="ar-frame-label">{frame.label}</span>
            <span className="ar-frame-val">{frame.value}</span>
          </div>
        ))}
        <div className="ar-stack-note">LOW ADDRESS</div>
      </div>
      <div className="ar-viz-section">
        <div className="ar-viz-label">INPUT</div>
        <div className="ar-code-block">{state.bytesWritten > 0 ? `${state.bytesWritten} bytes written` : "Awaiting input"}{state.overflowDetected ? " — ⚠ OVERFLOW!" : ""}</div>
      </div>
      <div className="ar-viz-section">
        <div className="ar-viz-label">EIP CONTROL</div>
        <div className={`ar-status ${state.shellObtained ? "ar-status-pwned" : state.overflowDetected ? "ar-status-warn" : "ar-status-safe"}`}>
          {state.shellObtained ? "⚠ EIP → win() — SHELL OBTAINED" : state.overflowDetected ? "⚠ Overflow — ret addr overwritten" : `● return addr = ${state.currentRetAddr}`}
        </div>
      </div>
    </div>
  );
}

function NetworkViz({ state }) {
  return (
    <div className="ar-viz ar-viz-shell">
      <div className="ar-viz-header">
        <span className="ar-viz-badge">HTTP</span>
        <span className="ar-viz-title">URL Fetcher — tools.vulnerable-corp.com</span>
      </div>
      <div className="ar-viz-section">
        <div className="ar-viz-label">LAST REQUESTED URL</div>
        <div className="ar-code-block" style={{wordBreak:"break-all"}}>{state.lastUrl || "— (no request yet)"}</div>
      </div>
      <div className="ar-viz-section">
        <div className="ar-viz-label">INTERNAL SERVICES</div>
        <div className="ar-file-tree">
          {["169.254.169.254 (AWS metadata)", "127.0.0.1:8080 (admin panel)", "127.0.0.1:6379 (Redis)", "internal.corp (internal API)"].map(s => (
            <div key={s} className="ar-tree-file">├── {s}</div>
          ))}
        </div>
      </div>
      <div className="ar-viz-section">
        <div className="ar-viz-label">ACCESS STATUS</div>
        <div className={`ar-status ${state.lastUrl?.includes("169.254") || state.lastUrl?.includes("127.0.0.1") || state.lastUrl?.includes("internal") ? "ar-status-pwned" : "ar-status-safe"}`}>
          {state.lastUrl?.includes("169.254") ? "⚠ AWS METADATA ACCESSED" :
           state.lastUrl?.includes("127.0.0.1") ? "⚠ INTERNAL SERVICE ACCESSED" :
           state.lastUrl ? "● External URL fetched" : "● Awaiting request"}
        </div>
      </div>
    </div>
  );
}

function TargetViz({ scenario, state }) {
  if (!state) return null;
  switch (state.type) {
    case "database":   return <DatabaseViz state={state} />;
    case "shell":      return <ShellViz state={state} />;
    case "filesystem": return <FilesystemViz state={state} />;
    case "dom":        return <DomViz state={state} />;
    case "memory":     return <MemoryViz state={state} />;
    case "network":    return <NetworkViz state={state} />;
    default:           return null;
  }
}

// ── Setup screen ──────────────────────────────────────────────────────────────

function SetupScreen({ onKey }) {
  const [val, setVal] = useState("");
  const [show, setShow] = useState(false);
  return (
    <div className="ar-setup">
      <div className="ar-setup-icon">🎯</div>
      <h1 className="ar-setup-title">Attack Range</h1>
      <p className="ar-setup-desc">
        An interactive exploitation playground. Pick a vulnerability, attack a simulated target,
        and watch the system state change in real time. Powered by Claude acting as the vulnerable server.
      </p>
      <div className="ar-privacy-box">
        <span>🔒</span>
        <span>Your API key is stored in <strong>session storage only</strong> — never sent anywhere except <code>api.anthropic.com</code>.</span>
      </div>
      <label className="ar-label">Anthropic API Key</label>
      <div className="ar-key-row">
        <input
          className="ar-input"
          type={show ? "text" : "password"}
          value={val}
          onChange={e => setVal(e.target.value)}
          placeholder="sk-ant-..."
          autoComplete="off"
          spellCheck={false}
        />
        <button type="button" className="ar-key-toggle" onClick={() => setShow(s => !s)}>
          {show ? "hide" : "show"}
        </button>
      </div>
      <button
        className="ar-btn-primary"
        disabled={!val.trim()}
        onClick={() => { sessionStorage.setItem(SESSION_KEY, val.trim()); onKey(val.trim()); }}
      >
        Enter the Range
      </button>
    </div>
  );
}

// ── Win Banner ────────────────────────────────────────────────────────────────

function WinBanner({ message, onDismiss }) {
  return (
    <div className="ar-win-overlay">
      <div className="ar-win-box">
        <div className="ar-win-icon">💀</div>
        <div className="ar-win-title">EXPLOIT SUCCESSFUL</div>
        <div className="ar-win-msg">{message}</div>
        <button className="ar-btn-primary ar-btn-small" onClick={onDismiss}>Next scenario →</button>
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function AttackRange() {
  const [apiKey, setApiKey] = useState(() => sessionStorage.getItem(SESSION_KEY) || "");
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const [progState, setProgState] = useState(() => structuredClone(SCENARIOS[0].initialState));
  const [history, setHistory] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [loading, setLoading] = useState(false);
  const [exploitSuccess, setExploitSuccess] = useState(false);
  const [successMsg, setSuccessMsg] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [failCount, setFailCount] = useState(0);
  const [attackerNotes, setAttackerNotes] = useState([]);
  const [showNotes, setShowNotes] = useState(false);
  const [cmdHistory, setCmdHistory] = useState([]);
  const [cmdHistoryIdx, setCmdHistoryIdx] = useState(-1);
  const termRef = useRef(null);
  const inputRef = useRef(null);

  const scenario = SCENARIOS[scenarioIdx];
  const currentHint = scenario.hints[Math.min(failCount, scenario.hints.length - 1)];

  useEffect(() => {
    if (termRef.current) termRef.current.scrollTop = termRef.current.scrollHeight;
  }, [history]);

  const switchScenario = useCallback((idx) => {
    setScenarioIdx(idx);
    setProgState(structuredClone(SCENARIOS[idx].initialState));
    setHistory([]);
    setInputVal("");
    setExploitSuccess(false);
    setSuccessMsg(null);
    setShowHint(false);
    setFailCount(0);
    setAttackerNotes([]);
    setCmdHistory([]);
    setCmdHistoryIdx(-1);
  }, []);

  const run = useCallback(async () => {
    const input = inputVal.trim();
    if (!input || loading) return;

    setCmdHistory(h => [input, ...h]);
    setCmdHistoryIdx(-1);
    setInputVal("");
    setHistory(h => [...h, { type: "attacker", text: input }]);
    setLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "x-api-key": apiKey,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 2048,
          system: scenario.systemPrompt,
          messages: [{ role: "user", content: scenario.buildUserMessage(progState, input) }],
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.error?.message || `API error ${res.status}`);
      }

      const data = await res.json();
      const raw = data.content?.[0]?.text || "";
      const cleaned = raw.replace(/^```(?:json)?\s*/i, "").replace(/\s*```\s*$/i, "").trim();
      let parsed;
      try { parsed = JSON.parse(cleaned); }
      catch { throw new Error("Response was malformed. Try again."); }

      const { serverResponse, sqlQuery, commandExecuted, resolvedPath, requestMade, tokenAnalysis,
              renderedHtml, bytesAnalysis, internalLog, newState,
              exploitSuccess: success, successMessage, attackerNote } = parsed;

      const details = [
        sqlQuery        ? `SQL: ${sqlQuery}`        : null,
        commandExecuted ? `CMD: ${commandExecuted}` : null,
        resolvedPath    ? `PATH: ${resolvedPath}`   : null,
        requestMade     ? `REQ: ${requestMade}`     : null,
        tokenAnalysis   ? `JWT: ${tokenAnalysis}`   : null,
        renderedHtml    ? `HTML: ${renderedHtml}`   : null,
        bytesAnalysis   || null,
        internalLog     ? `[${internalLog}]`        : null,
      ].filter(Boolean).join("\n");

      setHistory(h => [
        ...h,
        { type: "server", text: serverResponse || "(no response)", details },
        ...(success ? [{ type: "win", text: successMessage || "Exploit successful!" }] : []),
      ]);

      if (!success) setFailCount(f => f + 1);

      if (newState && typeof newState === "object") {
        setProgState(prev => ({
          ...prev,
          ...newState,
          type: prev.type,
          sensitiveFiles: prev.sensitiveFiles ?? undefined,
          adminCookie:    prev.adminCookie    ?? undefined,
          internalServices: prev.internalServices ?? undefined,
        }));
      }

      if (success) {
        setExploitSuccess(true);
        setSuccessMsg(successMessage || "You pwned it.");
        if (attackerNote) {
          setAttackerNotes(n => [...n, { scenario: scenario.name, payload: input, note: attackerNote }]);
          setShowNotes(true);
        }
      }
    } catch (e) {
      const isAuth = e.message?.toLowerCase().includes("authentication") || e.message?.includes("401");
      setHistory(h => [...h, { type: "error", text: e.message, isAuth }]);
      setFailCount(f => f + 1);
    } finally {
      setLoading(false);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [apiKey, inputVal, loading, scenario, progState]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === "Enter") { run(); return; }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setCmdHistoryIdx(i => {
        const next = Math.min(i + 1, cmdHistory.length - 1);
        setInputVal(cmdHistory[next] || "");
        return next;
      });
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setCmdHistoryIdx(i => {
        const next = Math.max(i - 1, -1);
        setInputVal(next === -1 ? "" : cmdHistory[next] || "");
        return next;
      });
    }
  }, [run, cmdHistory]);

  if (!apiKey) return <SetupScreen onKey={setApiKey} />;

  return (
    <div className="ar-root">
      {/* Scenario selector */}
      <div className="ar-scenarios">
        {SCENARIOS.map((s, i) => (
          <button
            key={s.id}
            className={`ar-scenario-btn ${scenarioIdx === i ? "ar-scenario-active" : ""}`}
            onClick={() => switchScenario(i)}
          >
            <span className="ar-scenario-icon">{s.icon}</span>
            <span className="ar-scenario-name">{s.name}</span>
            <span className="ar-scenario-diff" style={{ color: s.dc }}>{s.difficulty}</span>
          </button>
        ))}
      </div>

      {/* Info bar */}
      <div className="ar-infobar">
        <div className="ar-info-target">
          <span className="ar-info-label">TARGET</span>
          <span className="ar-info-val">{scenario.target}</span>
        </div>
        <div className="ar-info-objective">
          <span className="ar-info-label">OBJECTIVE</span>
          <span className="ar-info-val">{scenario.objective}</span>
        </div>
        <div className="ar-infobar-right">
          {attackerNotes.length > 0 && (
            <button className={`ar-hint-btn ${showNotes ? "ar-hint-active" : ""}`} onClick={() => setShowNotes(s => !s)}>
              📓 Notes ({attackerNotes.length})
            </button>
          )}
          <button className={`ar-hint-btn ${showHint ? "ar-hint-active" : ""}`} onClick={() => setShowHint(s => !s)}>
            {showHint ? "Hide hint" : `Hint${failCount > 0 ? ` (${failCount} fails)` : ""}`}
          </button>
          <button className="ar-hint-btn" title="Re-enter API key" onClick={() => { sessionStorage.removeItem(SESSION_KEY); setApiKey(""); }}>
            🔑 Key
          </button>
        </div>
      </div>

      {showHint && (
        <div className="ar-hint-bar">
          💡 {currentHint}
          {failCount >= 2 && <span className="ar-hint-progress"> ({Math.min(failCount + 1, scenario.hints.length)}/{scenario.hints.length} hint level)</span>}
        </div>
      )}

      {showNotes && attackerNotes.length > 0 && (
        <div className="ar-notes-panel">
          <div className="ar-notes-header">📓 Attacker Notes — techniques learned</div>
          {attackerNotes.map((n, i) => (
            <div key={i} className="ar-note">
              <div className="ar-note-header">
                <span className="ar-note-scenario">{n.scenario}</span>
                <span className="ar-note-payload">{n.payload}</span>
              </div>
              <div className="ar-note-text">{n.note}</div>
            </div>
          ))}
        </div>
      )}

      {/* Main layout */}
      <div className="ar-main">
        {/* Terminal */}
        <div className="ar-terminal-pane">
          <div className="ar-term-header">
            <span className="ar-dot ar-dot-r" />
            <span className="ar-dot ar-dot-y" />
            <span className="ar-dot ar-dot-g" />
            <span className="ar-term-title">attacker@kali — attack-range</span>
          </div>
          <div className="ar-term-body" ref={termRef}>
            {history.length === 0 && (
              <div className="ar-term-welcome">
                <span className="ar-term-dim">Attack Range ready. Send your first payload below. Use ↑↓ to recall history.</span>
              </div>
            )}
            {history.map((entry, i) => (
              <div key={i} className={`ar-entry ar-entry-${entry.type}`}>
                {entry.type === "attacker" && (
                  <div className="ar-entry-line">
                    <span className="ar-prompt">attacker@kali:~$ </span>
                    <span className="ar-payload">{entry.text}</span>
                  </div>
                )}
                {entry.type === "server" && (
                  <div className="ar-entry-server">
                    <div className="ar-server-response">{entry.text}</div>
                    {entry.details && <div className="ar-server-details">{entry.details}</div>}
                  </div>
                )}
                {entry.type === "win" && (
                  <div className="ar-entry-win">███ EXPLOIT SUCCESS: {entry.text} ███</div>
                )}
                {entry.type === "error" && (
                  <div className="ar-entry-error">
                    Error: {entry.text}
                    {entry.isAuth && (
                      <button className="ar-inline-rekey" onClick={() => { sessionStorage.removeItem(SESSION_KEY); setApiKey(""); }}>
                        🔑 Fix API key
                      </button>
                    )}
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <div className="ar-entry ar-entry-loading">
                <span className="ar-loading-dot" /><span className="ar-loading-dot ar-d2" /><span className="ar-loading-dot ar-d3" />
              </div>
            )}
          </div>
          <div className="ar-term-input-row">
            <span className="ar-prompt">attacker@kali:~$ </span>
            <input
              ref={inputRef}
              className="ar-term-input"
              value={inputVal}
              onChange={e => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="enter payload… (↑↓ for history)"
              disabled={loading || exploitSuccess}
              spellCheck={false}
              autoComplete="off"
            />
            <button className="ar-run-btn" onClick={run} disabled={loading || !inputVal.trim() || exploitSuccess}>
              {loading ? "…" : "▶"}
            </button>
          </div>
        </div>

        {/* Target visualizer */}
        <div className="ar-viz-pane">
          <TargetViz scenario={scenario} state={progState} />
        </div>
      </div>

      {exploitSuccess && (
        <WinBanner message={successMsg} onDismiss={() => { const next = (scenarioIdx + 1) % SCENARIOS.length; switchScenario(next); }} />
      )}
    </div>
  );
}
