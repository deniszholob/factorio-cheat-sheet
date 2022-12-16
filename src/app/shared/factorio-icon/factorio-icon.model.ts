export class FactorioIcon {
  src: string;
  text?: string;
  name: string;

  constructor(src: string, text?: string, name?: string) {
    this.src = src;
    this.text = text;
    this.name = name || '';
  }
}

export enum FactorioIconIds {
  Boiler = 'Boiler',
  Solar_panel = 'Solar_panel',
  Transport_belt = 'Transport_belt',
  Fast_transport_belt = 'Fast_transport_belt',
  Express_transport_belt = 'Express_transport_belt',
  Empty_barrel = 'Empty_barrel',
  Crude_oil_barrel = 'Crude_oil_barrel',
  Copper_ore = 'Copper_ore',
  Iron_ore = 'Iron_ore',
  Copper_plate = 'Copper_plate',
  Iron_plate = 'Iron_plate',
  Electronic_circuit = 'Electronic_circuit',
  Advanced_circuit = 'Advanced_circuit',
  Steel_chest = 'Steel_chest',
  Fluid_wagon = 'Fluid_wagon',
  Offshore_pump = 'Offshore_pump',
  Pipe = 'Pipe',
  Storage_tank = 'Storage_tank',
  Pump = 'Pump',
  Lab = 'Lab',
  Burner_inserter = 'Burner_inserter',
  Inserter = 'Inserter',
  'Long-handed_inserter' = 'Long-handed_inserter',
  Fast_inserter = 'Fast_inserter',
  Filter_inserter = 'Filter_inserter',
  Stack_inserter = 'Stack_inserter',
  Stack_filter_inserter = 'Stack_filter_inserter',
  'Inserter_capacity_bonus_(research)' = 'Inserter_capacity_bonus_(research)',
  Coal = 'Coal',
  Stone_furnace = 'Stone_furnace',
  Steel_furnace = 'Steel_furnace',
  Uranium_ore = 'Uranium_ore',
  'Uranium-235' = 'Uranium-235',
  'Uranium-238' = 'Uranium-238',
  Speed_module_3 = 'Speed_module_3',
  Productivity_module_3 = 'Productivity_module_3',
  Efficiency_module_3 = 'Efficiency_module_3',
  Centrifuge = 'Centrifuge',
  Nuclear_reactor = 'Nuclear_reactor',
  Uranium_fuel_cell = 'Uranium_fuel_cell',
  Heat_exchanger = 'Heat_exchanger',
  Steam_turbine = 'Steam_turbine',
  Steam = 'Steam',
  Chemical_science_pack = 'Chemical_science_pack',
  Advanced_oil_processing = 'Advanced_oil_processing',
  Crude_oil = 'Crude_oil',
  Water = 'Water',
  Heavy_oil = 'Heavy_oil',
  Light_oil = 'Light_oil',
  Petroleum_gas = 'Petroleum_gas',
  Beacon = 'Beacon',
  Wood = 'Wood',
  Solid_fuel = 'Solid_fuel',
  Rocket_fuel = 'Rocket_fuel',
  Nuclear_fuel = 'Nuclear_fuel',
  Cargo_wagon = 'Cargo_wagon',
}
