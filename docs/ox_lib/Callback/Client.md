## Client -> Server callback

### lib.callback

The response is handled in a separate coroutine.

```lua
lib.callback(name, delay, cb, ...)
```

- name: `string`
- delay: `number` or `false`
- cb: `function`
- ...: `any`

```lua
lib.callback('ox_inventory:getItemCount', false, function(count)
    print(count)
end, 'water', {type = 'fresh'})
```

### lib.callback.await

The current coroutine is yielded until a response is received.

```lua
lib.callback.await(name, delay, ...)
```

- name: `string`
- delay: `number` or `false`
- ...: `any`

```lua
local count = lib.callback.await('ox_inventory:getItemCount', false, 'water', {type = 'fresh'})
print(count)
```

## Server -> Client callback

### lib.callback.register

```lua
lib.callback.register(name, cb)
```

- name: `string`
- cb: `function`

```lua
lib.callback.register('ox:getNearbyVehicles', function(radius)
  local nearbyVehicles = lib.getNearbyVehicles(GetEntityCoords(cache.ped), radius, true)
  return nearbyVehicles
end
```
