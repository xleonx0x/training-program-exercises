import VideoPlayer from "./VideoPlayer"
import { useState } from "react"

const VideoController = ({episodes}) => {
    const [selectedEpisode, setSelectedEpisode] = useState(episodes[0]|| {episode: "skull", src: "https://www.youtube.com/watch?v=V-_O7nl0Ii0"})

    const episodeDiv = episodes.map((episode, i) => {
        const episodeNum = i+1;
        return (
        <div onClick={() => setSelectedEpisode(episode)} key={episode.name} className={`group select-none hover:cursor-pointer align-center flex flex-row py-3 px-4 hover:bg-neutral-600 ${episodeNum % 2 ? "bg-neutral-800": "bg-neutral-900"}`}>
            <span className="w-10 text-stone-400 group-hover:text-neutral-200"><b>{episodeNum}</b></span>
            <span className="text-stone-400 group-hover:text-amber-300">{episode.name}</span>
            <div className="ml-auto">{selectedEpisode.name === episode.name ? '🙏': ''}</div>
        </div>
        )
    })

    return (
        <div className="flex flex-row bg-neutral-950">
            <div className="flex-col w-64">
                <div className="bg-neutral-900 py-3 px-4 text-stone-200 text-sm">List of episodes:</div>
                {episodeDiv}
                <div className="flex-1"></div>
            </div>
            <div className="flex-col grow">
                <VideoPlayer videoSrc={selectedEpisode.src}/>
                <div className="flex-1"></div>
            </div>
        </div>
    )
}

export default VideoController