// import {blogPreview as teamNames} from "@/app/blog/team-names-are-like-stock-tickers/blogPreview";
// import {blogPreview as pairingPlusDelta} from "@/app/blog/pairing-plus-deltas/blogPreview";
import {BlogPreview} from "@/app/blog/blog.types";

export const publishedBlogs: BlogPreview[] = [
].sort((a: BlogPreview, b: BlogPreview) => {
    return b.date.getTime() - a.date.getTime();
});
