export const useRefresh = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
    };


    const refreshDataWithAnimation = (fetch: any) => {
        fetch('papiro');
        scrollToTop();
    }

    return {
        refreshDataWithAnimation,
    }
}