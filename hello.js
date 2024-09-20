const SUN_ICON = '\u2600';
const MOON_ICON = '\u{1F319}';

document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        load()
  }
}


let style = document.createElement('style');
style.textContent = `
        body, 
    td,
    .breadcrumb a,
    .main-content,
    .accordion,
    h2, h3, h4, h5, h6,
    .slick-choshen-main-page-single-click h4,
    .service-requests-tab.nav-tabs > li + li > a,
    .seminar-works-details-wrapper, 
    .account-details-wrapper,
    .panel-heading,
    #my-account-accordion > .panel-default > .panel-heading a,
    .my-payments-total.choshen-pseudo-table:first-of-type,
    .panel,
    table,
    td > a,
    input,
    .form-control,
    .panel-default > .panel-heading + .panel-collapse > .panel-body.panel-body-with-bg,
    .menu .tab-content .tab-pane > div > ul,
    .white-container-thanks-error,
    .credits-counter-sp, 
    select,
    .col-md-10 > .row,
    iframe,
    .exams-panel-gray-bg,
    .exams-panel .exams-panel-label,
    .vue-dropzone,
    .white-container
    {
        font-family: "Miriam Libre", sans-serif !important;
        background-color: #2a3d4a !important;
        color: white !important;
    }
    /* TODO */
    .tabs-right > .nav-tabs .active > a
    {
        color: aqua !important;
    }

    .menu .dropdown.open .menu-button, .menu .dropdown.open .menu-button:hover, .menu .dropdown.open .menu-button:focus {
        background-color: aqua !important;
    }

    .nav-tabs > li > a:hover,
    .tabs-right > .nav-tabs .active > a:hover,
    .nav-tabs > li.active > a  {
        border-color: none !important;
        border: none !important;
        background-color: rgb(12, 72, 82, 10) !important;
    }

    .covid_title {
        background-image: none !important;
        padding-right: 0px !important;
    }

    .slick-choshen-main-page-single-click > a > div,
    .footer
    {
        background-color: #9DB2BF !important;
    }

    .navbar,
    .rounded-subheader,
    .tabs-right > .nav-tabs > li > a,
    .menu .tab-content .tab-pane > div > ul,
    .tabs-right .tab-content a {
        background-color: #0d2a52 !important;
        color: white !important;
    }
    `;


function load() {
    let theme = localStorage.getItem('theme');
    let modeToggle = document.createElement('button');
    modeToggle.textContent = MOON_ICON

    if(theme == 'dark') {
        loadDarkTheme(modeToggle)
    }

    // Set the style for fixed positioning at the top-left of the window
    modeToggle.style.position = 'fixed';
    modeToggle.style.width = '50px';
    modeToggle.style.height = '50px';
    modeToggle.style.top = '0';
    modeToggle.style.left = '0';
    modeToggle.style.margin = '20';  
    modeToggle.style.padding = '10px';  // Add padding for better visibility
    modeToggle.style.backgroundColor = 'black';  // Background color
    modeToggle.style.color = 'white';  // Text color for contrast
    modeToggle.style.fontSize = '16px';  // Adjust font size
    modeToggle.style.zIndex = '9999';  // Ensure it floats over all other elements

    modeToggle.onclick = ev => {
        if(modeToggle.textContent == MOON_ICON) {
            loadDarkTheme(modeToggle)
        } else {
            modeToggle.textContent = MOON_ICON;
            document.head.removeChild(style)
            localStorage.setItem('theme', 'light');
        }
        
    }

    document.documentElement.appendChild(modeToggle);

}


function loadDarkTheme(modeToggle) {
    document.head.appendChild(style)
    modeToggle.textContent = SUN_ICON;
    localStorage.setItem('theme', 'dark');
}