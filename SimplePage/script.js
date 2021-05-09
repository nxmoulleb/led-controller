function switchType(on, off1, off2) {
    console.log(on+'\n');
    document.getElementById(on).style.display = 'block';
    document.getElementById(off1).style.display = 'none';
    document.getElementById(off2).style.display = 'none';
}