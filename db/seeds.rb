BITS_NAMES = [
  'bargraph',
  'bend-sensor',
  'branch',
  'bright-led',
  'button',
  'buzzer',
  'coin-battery',
  'dc-motor',
  'dimmer',
  'doubleand',
  'doubleor',
  'fan',
  'forkinverter',
  'led',
  'light-sensor',
  'light-trigger',
  'light-wire',
  'long-led',
  'motion-trigger',
  'power',
  'pressure-sensor',
  'pulse',
  'rgb-led',
  'roller-switch',
  'servo-motor',
  'slide-dimmer',
  'slide-switch',
  'sound-trigger',
  'temperature-sensor',
  'timeout',
  'toggle-switch',
  'usb-power',
  'uv-led',
  'vibration-motor',
  'wire',
]

bits = BITS_NAMES.map { |name| Bit.new(name: name) }
bits.each(&:save)

# Some sample inventions
dune_buggy = Invention.find_or_initialize_by(
  title: 'Dune buggy',
  description: 'Crawls across sandy beaches!',
  username: 'sandroller',
  email: 'buggyenthusiast@example.com',
)
dune_buggy_bits = Bit.where(name: ['bend-sensor', 'power', 'servo-motor'])
dune_buggy.bits = dune_buggy_bits
dune_buggy.save

mouse_trap = Invention.find_or_initialize_by(
  title: 'Mouse trap',
  description: 'Makes catching mice a "snap"!',
  username: 'deathtomickey',
  email: 'squeaksqueakbangbang@example.com',
)
mouse_trap_bits = Bit.where(name: ['power', 'pressure-sensor', 'wire', 'fan'])
mouse_trap.bits = mouse_trap_bits
mouse_trap.save
