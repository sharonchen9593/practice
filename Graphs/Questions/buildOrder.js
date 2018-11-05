/**
 * Given a list of projects and list of dependencies (list of pars of projects where second
 * project is dependent on the first project). Find the build order that will allow the projects
 * to be built. Return error if there is no valid build order. (topological sort)
 *
 * Example:
 * Input:
 *  projects: a, b, c, d, e, f
 *  dependencies: (a, d), (f, b), (b, d), (f, a), (d, c)
 * Output: f, 3, a, b, d, c
 *
 * Hints: 26, 47, 60, 85, 125, 133
 * 
 * Time Complexity:
 * Space Complexity:
 **/