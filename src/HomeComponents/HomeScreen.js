import { ImageStorage } from "../components/ImageStorage";
import { AudioStorage } from "../components/AudioStorage";
import { LoginComponents } from "../components/LoginComponents";

export function HomeScreen() {
    return (
        <div>
        <div>
            <LoginComponents />
            <ImageStorage />
            <AudioStorage />
        </div>
        </div>
    );
    }
    