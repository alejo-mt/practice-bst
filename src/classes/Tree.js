/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
import Node from './Node.js';

export default class Tree {
  constructor(arr) {
    const sorted = this.sortAndRemoveDuplicates(arr);
    this.root = this.buildTree(sorted);
  }

  sortAndRemoveDuplicates(arr) {
    return [...new Set(arr)].sort((a, b) => a - b);
  }

  buildTree(arr, start = 0, end = arr.length - 1) {
    if (start > end) return null;
    const mid = Math.floor((start + end) / 2);
    const root = new Node(arr[mid]);
    root.left = this.buildTree(arr, start, mid - 1);
    root.right = this.buildTree(arr, mid + 1, end);
    return root;
  }

  walk(root = this.root, ans = []) {
    if (root == null) return ans;
    this.walk(root.left, ans);
    ans.push(root.data);
    this.walk(root.right, ans);
    return ans;
  }

  find(value, root = this.root) {
    if (root == null) return null;
    if (root.data === value) return root;
    if (value < root.data) return this.find(value, root.left);
    return this.find(value, root.right);
  }

  minimum(root = this.root) {
    if (root == null) return null;
    if (root.left == null) return root;
    return this.minimum(root.left);
  }

  maximum(root = this.root) {
    if (root == null) return null;
    if (root.right == null) return root;
    return this.maximum(root.right);
  }

  successor(value, root = this.root) {
    const node = this.find(value, root);
    if (node == null) return undefined;
    if (node.right != null) return this.minimum(node.right).data;

    let succ = null;
    while (root != null) {
      if (value < root.data) {
        succ = root;
        root = root.left;
      } else if (value > root.data) {
        root = root.right;
      } else {
        break;
      }
    }
    return succ ? succ.data : undefined;
  }

  predecessor(value, root = this.root) {
    const node = this.find(value, root);
    if (node == null) return undefined;
    if (node.left != null) return this.maximum(node.left).data;

    let pred = null;
    while (root != null) {
      if (value > root.data) {
        pred = root;
        root = root.right;
      } else if (value < root.data) {
        root = root.left;
      } else {
        break;
      }
    }
    return pred ? pred.data : undefined;
  }

  insert(value, root = this.root) {
    if (root == null) {
      return new Node(value);
    }
    if (value < root.data) {
      root.left = this.insert(value, root.left);
    } else if (value > root.data) {
      root.right = this.insert(value, root.right);
    }
    return root;
  }

  delete(value, root = this.root) {
    if (root == null) return root;

    if (value < root.data) {
      root.left = this.delete(value, root.left);
      return root;
    }
    if (value > root.data) {
      root.right = this.delete(value, root.right);
      return root;
    }

    if (root.left == null) {
      return root.right;
    }
    if (root.right == null) {
      return root.left;
    }

    const minLargerNode = this.minimum(root.right);
    root.data = minLargerNode.data;
    root.right = this.delete(minLargerNode.data, root.right);

    return root;
  }
}
