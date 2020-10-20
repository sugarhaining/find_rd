import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {
      mongoose: {
          url: 'mongodb://localhost:27017',
      }
  };
  return config;
};
