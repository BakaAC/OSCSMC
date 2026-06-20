# SKCraft Launcher

SKCraft Launcher is an open-source Minecraft modpack launcher platform maintained by SKCraft. It is primarily aimed at modpack authors who want to customize, build, and distribute their own branded launcher.

![SKCraft Launcher](https://raw.githubusercontent.com/SKCraft/Launcher/master/readme/launcher.png)

> Information updated: 2026-06-20

| Feature               | Details                             |
| --------------------- | ----------------------------------- |
| Authentication        | Microsoft Account / Offline Account |
| Supported Mod Loaders | Forge / Fabric / LiteLoader / Quilt |
| Supported Platforms   | Windows / macOS / Linux             |

## Downloads

[SKCraft Launcher GitHub Repository](https://github.com/SKCraft/Launcher).

[Source ZIP](https://github.com/SKCraft/Launcher/archive/master.zip).

The official repository currently does not provide GitHub Releases binary builds. The official wiki instructs users to download the source and build it locally: Windows users can run `build.bat`, Linux and macOS users can run `./build.sh`, and `./gradlew clean build` is also supported. Build outputs are placed under each subproject's `build/libs/` directory.

## Features

- Customize the launcher's logo, branding, and news feed
- Distribute several modpacks as a set
- Hide selected modpacks behind a secret key
- Provides both a graphical modpack creator and command-line build tools
- Supports download resume, incremental updates, and file deduplication
- Supports a self-updating bootstrapper and portable mode
- Supports optional mods/features and can generate modpacks from Git or another VCS through CI

## Open Source License

SKCraft Launcher itself is released under the [GNU Lesser General Public License v3](https://github.com/SKCraft/Launcher/blob/master/LICENSE.txt). The official notes also require third-party contributions to be dual licensed under the LGPL-3.0 and 3-clause BSD terms listed in `LICENSE.txt`.
