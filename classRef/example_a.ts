// 1. THE CONTRACT (Developer defined)
interface AppConfig {
  environment: string;
  maxUsers: number;
  roles: string[]; // We use an array because DB data is dynamic
}

// 2. THE DATA (Loaded from YAML/JSON/DB at runtime)
// This is an Object Literal acting as a "Source of Truth"
const rawConfigFromDB = {
  "env": "production",
  "limit": 500,
  "available_roles": ["admin", "editor", "viewer"]
};

// 3. THE SYNTHESIS (Mapping the external data to our logic)
const currentConfig: AppConfig = {
  environment: rawConfigFromDB.env,
  maxUsers: rawConfigFromDB.limit,
  roles: rawConfigFromDB.available_roles
};

console.log(`System running in ${currentConfig.environment}`);