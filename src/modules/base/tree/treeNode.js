function computeKey(parentKey, childNum) {
    if (!parentKey) {
        return '0';
    }
    if (parentKey === '0') {
        return `${childNum}`;
    }
    return `${parentKey}.${childNum}`;
}

export function getTreeNode(node, level, parentKey, childNum) {
    return {
        name: node.name,
        label: node.label,
        metatext: node.metatext,
        level,
        key: computeKey(parentKey, childNum),
        // eslint-disable-next-line no-script-url
        href: node.href,
        disabled: node.disabled || false,
        isLoading: node.isLoading || false,
        visible: level === 1,
        children: [],
        visibleItems: [],
        nodeRef: node,
        isLeaf:
            !node.isLoading &&
            (!node.items ||
                (Array.isArray(node.items) && node.items.length === 0)),
        get expanded() {
            return this.isLeaf && !this.isLoading
                ? true
                : node.expanded || false;
        },
        focusedChild: null,
        get strexpanded() {
            return (
                this.isLeaf ? true : this.nodeRef.expanded || false
            ).toString();
        }
    };
}
