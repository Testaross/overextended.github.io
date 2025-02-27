---
sidebar_position: 2
---

# Configuration

You can add these settings directly to your 'server.cfg', or add them to a separate file (i.e. inventory.cfg) and call it with `exec`.

:::caution

Convars **must** be set before starting ox_inventory.
:::

The values below are _defaults_ and should not be explicitly set unless changing the value.

```yml
# Activate specific event handlers and functions (supported: ox, esx, qb)
setr inventory:framework "esx"

# Load specific language file from data/locales
setr inventory:locale "en"

# Number of slots for player inventories
setr inventory:slots 50

# Maximum carry capacity for players, in grams (will be automatically converted to kilograms in-game)
setr inventory:weight 30000

# Weapons will reload after reaching 0 ammo
setr inventory:autoreload false

# Weapons must be aimed before shooting
setr aimedfiring false

# Blur the screen while accessing the inventory
setr inventory:screenblur true

# Trim whitespace from vehicle plates when checking owned vehicles
setr inventory:trimplate true

# Integrated support for qtarget stashes, shops, etc
setr inventory:qtarget false

# Default hotkeys to access primary and secondary inventories, and hotbar
setr inventory:keys ["F2", "K", "TAB"]

# Enable control action when inventory is open
setr inventory:enablekeys [249]

# Show a list of all nearby players when giving items
setr inventory:giveplayerlist true

# Jobs with access to police armoury, evidence lockers, etc
setr inventory:police ["police", "sheriff"]

# Item prices fluctuate in shops
set inventory:randomprices true

# Compare current version to latest release on GitHub
set inventory:versioncheck true

# Loot will randomly generate inside unowned vehicles and dumpsters
set inventory:randomloot true

# Minimum job grade to remove items from evidence lockers
set inventory:evidencegrade 2

# Stashes will be wiped after remaining unchanged for the given time
set inventory:clearstashes "6 MONTH"

# Set the contents of randomly generated inventories
# [item name, minimum, maximum, loot chance]
set inventory:vehicleloot [
    ["cola", 1, 1],
    ["water", 1, 1],
    ["garbage", 1, 2, 50],
    ["panties", 1, 1, 5],
    ["money", 1, 50],
    ["money", 200, 400, 5],
    ["bandage", 1, 1]
]

set inventory:dumpsterloot [
    ["mustard", 1, 1],
    ["garbage", 1, 3],
    ["money", 1, 10],
    ["burger", 1, 1]
]

# Set datadog API key for inventory logging (https://app.datadoghq.com/organization-settings/api-keys)
set datadog:key ""

# Set server intake (https://docs.datadoghq.com/api/latest/logs/#send-logs)
set datadog:site "datadoghq.com"

# Set server hostname
set datadog:hostname "FXServer"
```
