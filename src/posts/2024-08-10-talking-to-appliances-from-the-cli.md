---
title: Talking to appliances from the CLI
description: There's a certain allure to controlling the physical world on the keyboard!
date: "2024-08-10"
tags:
  - cli
  - code
  - home assistant
  - iot
---

There's something deeply satisfying about being able to control your physical environment by typing on the keyboard.

I've only recently installed [Home Assistant](https://www.home-assistant.io/) to set up some basic temperature sensors and smart lights at home. While I can see why people are excited about it, I think I've found myself a use case that excites me even more than the cool dashboards and widgets. Spending a lot of my time on a command line (not to mention my home office), I noticed there's a certain allure to talking to appliances **from the command line**.

So far I've built three things that work simply by talking to various devices via the Home Assistant REST API in my local network. It's all about either requesting states for various known devices and then filtering the JSON output, or updating them with a HTTP POST request.

### fan on|off

The latest addition is a small shell script that allows me to type `fan on` or `fan off` to toggle the Xiaomi floor fan standing near my desk. The effect is nearly immediate, and I immensely enjoy being able to quickly turn the fan on and off during a Google Meet in the summer heat.

I'm using the fish shell, so I wrote it as a fish function. This is how `fish/functions/fan.fish` looks:

```fish
#!/usr/bin/env fish
# Requires environment variables HA_API_URL and HA_API_TOKEN
function fan
    if test "$argv[1]" = ""
        echo "usage: fan [on|off]"
    else if test "$argv[1]" = on
        curl -X POST --silent \
            -H "Authorization: Bearer $HA_API_TOKEN" \
            -H "Content-Type: application/json" \
            -d '{"entity_id": "fan.mi_smart_standing_fan_2_lite"}' \
            $HA_API_URL/services/fan/turn_on >/dev/null
    else if test "$argv[1]" = off
        curl -X POST --silent \
            -H "Authorization: Bearer $HA_API_TOKEN" \
            -H "Content-Type: application/json" \
            -d '{"entity_id": "fan.mi_smart_standing_fan_2_lite"}' \
            $HA_API_URL/services/fan/turn_off >/dev/null
    end
end
```

### temps

I also have `temps` that prints me an short overview of the [temperature sensors](https://sonoff.tech/product/gateway-and-sensors/snzb-02p/) in our home:

```sh
Ilmalämpöpumppu Huonelämpötila: 23.0
Lämpömittari: Mike Lämpötila: 24.4
Lämpömittari: Makuuhuone Lämpötila: 23.7
Lämpömittari: Takapiha Lämpötila: 17.4
Lämpömittari: Keittiö Lämpötila: 24
```

If you guessed "lämpötila" is Finnish for "temperature", ten points! It works by simply requesting a bunch of states and filters and pretty-prints it with jq:

```sh
#!/usr/bin/env fish
function temps
    curl --silent \
        -H "Authorization: Bearer $HA_API_TOKEN" \
        -H "Content-Type: application/json" \
        $HA_API_URL/states | jq -r '.[] | select(.entity_id | match("temperature")) | select(.attributes.unit_of_measurement == "°C") | "\(.attributes.friendly_name): \(.state)"'
end
```

### hue

I have a couple of Hue Play lights and an Hue Iris set up behind and next to my desktop. I've set them up to my Home Assistant by using the Hue Bridge, which allows me to continue using the Hue App to toggle them, or do it myself.

I can list all the available Hue scenes with `hue`,  and pick one with `hue <scene>`. Again, the lights toggle immediately, giving you a perfect sense of being in control.

```sh
$ hue
arctic_aurora
blo
emerald_isle
energize
fairfax
frosty_dawn
galaxy
golden_pond
honolulu
phantom
soho
spring_blossom
spring_lake
```

This is again a fish script, although this time I also added auto-complete! Typing `hue go` and hitting tab will expand it to `hue golden_pond`, which again makes it feel naturally integrated to the shell.

The source code for this is in GitHub: <https://github.com/mieky/hue.fish>

### What's next?

While it's very satisfying to solve a specific problem by simple shell scripts, I find myself wondering if this could be further generalized or abstracted into a more general-purpose tool. Maybe something like [hass-cli](https://www.home-assistant.io/blog/2019/02/04/introducing-home-assistant-cli/) would already be perfect for this, but I gotta admit, there's something cool about being able to do it with just a couple of standard tools such as curl and jq, while having it exactly the way you'd like.
