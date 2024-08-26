useEffect(() => {
    const reloadPage = () => {
      if (!window.location.hash) {
        window.location.hash = 'reloaded';
        window.location.reload();
      }
    };
  
    reloadPage();
  }, []);