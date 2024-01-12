import {MetaData} from "../components/shared/types/metaData";

export const metaData: MetaData = {
    author: "anonymous author",
    releaseInfo: {
        version: "1.0.0",
        packager: "NPM",
        "runtime engine": "NodeJS",
        "first release date": new Date().toLocaleDateString(),
        category: "SWE-Project",
    }
}