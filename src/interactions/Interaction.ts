/**
 * Base class for which all interactions should inherit from.
 * An interaction represents an individual process, i.e. create a user, update a user, etc.
 *
 * Goal: Build an interaction that creates a user and is accessible via a new route.
 *
 * Requirements:
 * The interaction creates a user (you can use a mock data store, as in memory, or just fake the data layer).
 * A user requires a name, email, and password.
 * Write a test that validates the user creation interaction works as expected.
 * Add a new route that calls the interaction to create a user.
 */
abstract class Interaction<RunReturnType> {
  abstract validate(): Promise<void>;
  abstract run(): Promise<RunReturnType>;
}

export default Interaction;
