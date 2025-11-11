function redirectTo(site) {
    const sites = {
        'back': 'index.html',
    };
    
    if (sites[site]) {
        window.location.href = sites[site];
    }
}