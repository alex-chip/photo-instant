const toggleMenu = (navId, toggleB) => {
    let nav = navId,
        toggleButton = toggleB

        toggleButton.addEventListener('click', () => {
            nav.classList.toggle('is-active')
        })

    // function showNav () {
    //     nav.classList.toggle('is-active')
    // }

    // if(nav) {
    //     if(toggleButton) {
    //         toggleButton.addEventListener('click', showNav)
    //     }
    // }
}

const navId = document.getElementById('navId')
const toggleB = document.getElementById('navId-toggle')

toggleMenu(navId, toggleB)
