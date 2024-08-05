import { RegistryPath } from "./entities/registry-path";
import { User } from "./entities/user";

/**
 * Create a list of all paths and their minimum access level
 */
export const getAllPaths = (registry: RegistryPath[]) => {
  return registry.map((registryPath) => {
    registryPath.absolutePath = buildAbsolutePath(registryPath, registry);

    return registryPath;
  });
};

function buildAbsolutePath(registryPath: RegistryPath, registry: RegistryPath[]) {
  if (registryPath.parent === null) return "/";

  const absolutePathParts: string[] = [];
  let currentRegistryPath = registryPath;
  while (currentRegistryPath.parent !== null) {
    absolutePathParts.unshift(currentRegistryPath.path);
    currentRegistryPath = findRegistryPath(currentRegistryPath.parent, registry);
  }

  return absolutePathParts.join("");
}

function findRegistryPath(path: string, registry: RegistryPath[]) {
  return registry.find((registryPath) => registryPath.path === path);
}

/**
 * Check accessibilty for a user
 */
export const hasAccess = (user: User, absolutePath: string, registry: RegistryPath[]) => {
  const paths = extractPathsFromAbsolutePath(absolutePath);

  return paths.every((path) => {
    const registryPath = findRegistryPath(path, registry);

    return user.level > registryPath.level;
  });
};

function extractPathsFromAbsolutePath(absolutePath: string) {
  return absolutePath.split("/").map((pathPart) => "/".concat(pathPart));
}

/**
 * Get all paths a user has access too
 */
export const getUserPaths = (user: User, registry: RegistryPath[]) => {
  return registry.filter((registryPath) => hasAccess(user, registryPath.absolutePath, registry));
};
