export interface Wallpaper {
    url: string;
    name: string;
}

interface FullWallpaper extends Wallpaper {
    liked: boolean;
    suggested: boolean;
    library: boolean;
}

export function useSuggestedWallpapers(): FullWallpaper[] {
    const wallpapers = useWallpapers();
    return wallpapers.filter(wallpaper => wallpaper.suggested);
}

export function useLikedWallpapers(): FullWallpaper[] {
    const wallpapers = useWallpapers();
    return wallpapers.filter(wallpaper => wallpaper.liked);
}

export function useLibraryWallpapers(): FullWallpaper[] {
    const wallpapers = useWallpapers();
    return wallpapers.filter(wallpaper => wallpaper.library);
}


export function useWallpapers(): FullWallpaper[] {
    return [{
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/grtS8AsZRGyLm3VJ2SHS7g",
        "name": "Heritage",
        liked: true,
        suggested: true,
        library: false
    }, {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/0reS7n7eRfClLKHIEiWJUw",
        "name": "Late night",
        liked: true,
        suggested: true,
        library: true
    },
    {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/-coa67EyQbunSMusqI2c0A",
        "name": "Hacking",
        liked: true,
        suggested: false,
        library: true
    },
    {
        url: "https://ideogram.ai/assets/image/lossless/response/lfj2Y_WbTsW6jrne4-NBWg",
        "name": "Diwali",
        liked: true,
        suggested: false,
        library: true
    },
    {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/vEbsGPEfSA6pX-2fu67G5A",
        "name": "Coding",
        liked: true,
        suggested: true,
        library: true
    },
    {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/O0l3cIsdSJm7CRjGqrb5-Q",
        "name": "Motivation",
        liked: false,
        suggested: true,
        library: false
    }, {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/6n67jVOxTRW0-xEqMpLw9A",
        name: "Night sky",
        liked: false,
        suggested: true,
        library: false
    }, {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/IfLz4vd4Tfy5fnBlMN0cLA",
        name: "Sunrise",
        liked: false,
        suggested: true,
        library: false
    }, {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/Hma-KogESI-h9o8oyO1YKg",
        name: "Shoes",
        liked: false,
        suggested: true,
        library: false
    }]
}