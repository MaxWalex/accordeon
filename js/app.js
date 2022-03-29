window.addEventListener('DOMContentLoaded', () => {

    const accordItems = document.querySelectorAll('.accordeon_item')

    const openAccordeon = () => {
        accordItems.forEach(item => {
            item.addEventListener('click', () => {
                item.classList.toggle('open')
            })
        })
    }

    openAccordeon()
})