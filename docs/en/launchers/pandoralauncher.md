# PandoraLauncher

PandoraLauncher (Pandora) is a modern Minecraft launcher written in Rust (based on the GPUI framework). It aims to balance ease of use with powerful instance management features, providing a unique file synchronization and mod management solution especially for multi-instance users.

![PandoraLauncher](https://raw.githubusercontent.com/Moulberry/PandoraLauncher/refs/heads/master/screenshots/instance.png)

> Last verified: 2026-06-20

| Feature               | Details                           |
| --------------------- | --------------------------------- |
| Authentication        | Microsoft Account / Offline Account |
| Supported Mod Loaders | Forge / NeoForge / Fabric         |
| Platforms             | Windows / macOS / Linux           |

## Downloads

[GitHub Releases](https://github.com/Moulberry/PandoraLauncher/releases).

## Features

- Supports syncing options, saves, and other files across different instances
- Manages files using hard links to significantly reduce disk space used by identical mods
- Securely stores account credentials using the specific system keychain
- Built-in Modrinth browser, allowing users to search and download mods directly within the launcher
- Logs are sanitized for security; access tokens and sensitive info are automatically hidden when viewing or uploading logs
- Provides a customized game output window to monitor real-time game logs
- Features dedicated logic for modpack management and multi-instance synchronization

## Open Source License

[MIT](https://github.com/Moulberry/PandoraLauncher/blob/master/LICENSE).