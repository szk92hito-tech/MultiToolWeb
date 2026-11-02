<script>
    window.downloadFile = (filename, base64Data) => {
        const link = document.createElement('a');
    link.download = filename;
    link.href = "data:application/zip;base64," + base64Data;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    };
</script>