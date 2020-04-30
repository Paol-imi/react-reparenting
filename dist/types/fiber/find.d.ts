import type { Fiber } from 'react-reconciler';
import type { HostENV } from '../core/ENV';
/**
 * Returns the child fiber in the given index or if the paremt has no children.
 * If the index provided is greater than the number of children the last child is returned.
 *
 * @param parent - The parent fiber.
 * @param index - The index of the child fiber to find.
 * @returns - The fiber found or null.
 */
export declare function findChildFiberAt(parent: Fiber, index: number): Fiber | null;
/**
 * Returns the child fiber with the given key or null if it is not found.
 *
 * @param parent - The parent fiber.
 * @param key - The key of the child fiber to find.
 * @returns - The fiber found or null.
 */
export declare function findChildFiber(parent: Fiber, key: string): Fiber | null;
/**
 * Returns the fiber before the one with the given key or null if it is not found.
 * If the fiber with the given key is the first child of the parent, the parent is returned.
 *
 * @param parent - The parent fiber.
 * @param key - The key of the child fiber.
 * @returns - The fiber found or null.
 */
export declare function findPreviousFiber(parent: Fiber, key: string): Fiber | null;
/**
 * Returns the first instance found in the parent fibers.
 *
 * @param fiber - The fiber.
 * @returns - The container instance or null.
 */
export declare function findContainerInstanceFiber<T>(fiber: Fiber | null, isElement: HostENV<T>['isElement']): InstanceFiber<T> | null;
/**
 * Returns the first instance found in the parent fibers.
 *
 * @param fiber - The fiber.
 * @returns - The instance or null.
 */
export declare function findInstanceFiber<T>(fiber: Fiber | null, isElement: HostENV<T>['isElement']): InstanceFiber<T> | null;
/** Fiber of an Instance. */
export interface InstanceFiber<T> extends Fiber {
    stateNode: T;
}