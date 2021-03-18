const main = () => {
    //Add Employee button handler
    let frm = document.getElementById('empForm');
    let elems = ['id', 'name', 'ext', 'email', 'department'];
    frm.addEventListener('submit', (e) => {
        e.preventDefault();
        for (let field of elems) {
            let el = document.getElementById(field)
            console.log(`${field.toUpperCase()}: ${el.value}`);
        }
    });
};

window.addEventListener('load', main);