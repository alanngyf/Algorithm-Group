// Problem #100
// Same Tree

// Given two binary trees, write a function to check if they are equal or not.

// Two binary trees are considered equal if they are structurally identical and the nodes have the same value.

// Tags: Depth-first search
// Difficulty: Easy

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (!p && !q) {
        return true;
    }else if (!p || !q) {
        return false;
    }else if (p.val !== q.val ) {
        return false;
    }else{
        return isSameTree(p.left, q.left)&&isSameTree(p.right, q.right);
    }
};