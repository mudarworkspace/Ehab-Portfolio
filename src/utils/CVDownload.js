export const handleDownload = () => {
    fetch("/Ehab Abdulhay Abou Fakher.pdf")
        .then((response) => response.blob())
        .then((blob) => {
            // Create a URL for the Blob
            const blobUrl = URL.createObjectURL(blob);

            // Create an anchor element
            const anchor = document.createElement("a");

            // Set the anchor's attributes
            anchor.href = blobUrl;
            anchor.download = "Eng.Ehab Abdulhay Abou Fakher.pdf"; // Set the desired file name

            // Simulate a click event on the anchor to trigger the download
            anchor.click();

            // Clean up by revoking the Blob URL
            URL.revokeObjectURL(blobUrl);
        });
};