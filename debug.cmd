setlocal
cd www
if exist C:\Windows\py.exe (
    py -m http.server
) else (
    python -m http.server
)