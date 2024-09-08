
export function getCodeFromUrl(){
    if(window.location.hash) {
        var hash = window.location.hash.substring(1); 
       
        // return decodeURI(hash)
        return LZString.decompressFromEncodedURIComponent(hash)
    }

    return "";
}

export async function copyUrl() {
    await navigator.clipboard.writeText(window.location.href);

    alert("URL copied")
}