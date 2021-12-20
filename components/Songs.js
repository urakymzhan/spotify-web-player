import { useRecoilValue } from 'recoil';
import { playlistState } from '../atoms/playlistAtom';
import Song from './Song';

function Songs() {
  const playlist = useRecoilValue(playlistState);
  return (
    <div>
      {playlist?.tracks?.items.map(({ track }, i) => {
        return <Song key={track.id} track={track} order={i} />;
      })}
    </div>
  );
}

export default Songs;
