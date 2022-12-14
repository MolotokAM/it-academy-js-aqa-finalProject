class BrowserHandling {
    /**
     * @param {string} url    url for navigate
     */
    navigate(url) {
        browser.url(url);
    }

    maximizeWindow() {
        browser.maximizeWindow();
    }

    /**
     * @param {int=} window    window to focus
     */
    switchWindow(title) {
        // Handle 'Redirecting' window
        browser.pause(3000);

        const windows = browser.getTabIds();
        for (let i = 0; i <= windows.length; i++) {
            browser.switchTab(windows[i]);
            if (browser.getTitle().includes(title)) {
                break;
            }
        }
    }
}
export default new BrowserHandling();
