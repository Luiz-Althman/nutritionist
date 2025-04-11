import { Banner } from './banner';
import { Story } from './story';
import { Welcome } from './welcome';

export default function About() {
    return (
        <div className="2xl:px-40 md:px-20">
            <Banner />
            <Welcome />
            <Story />
        </div>
    );
}
