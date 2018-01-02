const bindUtil = (scope, ...methodsToBind) => {
    if (!scope || !methodsToBind) return;
    
    methodsToBind.forEach(m => scope[m.name] = m.bind(scope));
}

export default bindUtil;