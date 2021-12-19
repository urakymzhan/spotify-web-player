import React from 'react';
import { useRecoilState } from 'recoil';
import { currentTrackIdState, isPlayingState } from '../atoms/songAtom';
import useSpotify from '../hooks/useSpotify';
import { millisToMinutesAndSeconds } from '../lib/time';

function Song({ order, track }) {
  //   console.log(order);
  const spotifyApi = useSpotify();
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);

  //   console.log(track);
  const playSong = () => {
    setCurrentTrackId(track.id);
    setIsPlaying(true);
    // ERROR: Player command failed: Premium required PREMIUM_REQUIRED.
    // Get Spotify Premium Account in order this to work!
    spotifyApi.play({
      uris: [track.uri],
    });
  };
  return (
    <div
      onClick={playSong}
      className="text-gray-500 grid grid-cols-2 py-4 px-5 hover:bg-gray-900 rounded-lg cursor-pointer"
    >
      <div className="flex items-center space-x-4">
        <p>{order + 1}</p>
        <img className="h-10 w-10" src={track.album.images[0].url} />
        <div>
          <p className="w-36 lg:w-64 text-white truncate">{track.name}</p>
          <p className="w-40 ">{track.artists[0].name}</p>
        </div>
      </div>

      <div className="flex items-center justify-between ml-auto md:ml-0">
        <p className="w-40 hidden md:inline">{track.album.name}</p>
        <p>{millisToMinutesAndSeconds(track.duration_ms)}</p>
      </div>
    </div>
  );
}

export default Song;
