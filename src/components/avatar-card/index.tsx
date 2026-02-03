import { RiMoonLine, RiSunLine } from 'react-icons/ri';
import { FALLBACK_IMAGE, LOCAL_STORAGE_KEY_NAME } from '../../constants';
import { Profile } from '../../interfaces/profile';
import { SanitizedThemeConfig } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';
import LazyImage from '../lazy-image';

interface AvatarCardProps {
  profile: Profile | null;
  loading: boolean;
  avatarRing: boolean;
  resumeFileUrl?: string;
  theme: string;
  setTheme: (theme: string) => void;
  themeConfig: SanitizedThemeConfig;
}

/**
 * Renders an AvatarCard component.
 * @param profile - The profile object.
 * @param loading - A boolean indicating if the profile is loading.
 * @param avatarRing - A boolean indicating if the avatar should have a ring.
 * @param resumeFileUrl - The URL of the resume file.
 * @param theme - The current theme.
 * @param setTheme - The setter for theme.
 * @param themeConfig - The theme configuration.
 * @returns JSX element representing the AvatarCard.
 */
const AvatarCard: React.FC<AvatarCardProps> = ({
  profile,
  loading,
  avatarRing,
  resumeFileUrl,
  theme,
  setTheme,
  themeConfig,
}): React.JSX.Element => {
  const toggleTheme = () => {
    const preferredDark = theme === 'dark';
    const nextTheme = preferredDark ? 'light' : 'dark';
    const resolvedTheme = themeConfig.themes.includes(nextTheme)
      ? nextTheme
      : themeConfig.defaultTheme;

    document.documentElement.setAttribute('data-theme', resolvedTheme);

    typeof window !== 'undefined' &&
      localStorage.setItem(LOCAL_STORAGE_KEY_NAME, resolvedTheme);

    setTheme(resolvedTheme);
  };

  const showToggle = themeConfig.themes.includes('light') ||
    themeConfig.themes.includes('dark');

  return (
    <div className="card shadow-lg card-sm bg-base-100 relative">
      {showToggle && (
        <div className="absolute top-3 right-3">
          {loading ? (
            skeleton({ widthCls: 'w-8', heightCls: 'h-8', shape: 'rounded' })
          ) : (
            <button
              type="button"
              onClick={toggleTheme}
              className="btn btn-ghost btn-sm"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <RiSunLine className="w-4 h-4" />
              ) : (
                <RiMoonLine className="w-4 h-4" />
              )}
            </button>
          )}
        </div>
      )}
      <div className="grid place-items-center py-8">
        {loading || !profile ? (
          <div className="avatar opacity-90">
            <div className="mb-8 rounded-full w-32 h-32">
              {skeleton({
                widthCls: 'w-full',
                heightCls: 'h-full',
                shape: '',
              })}
            </div>
          </div>
        ) : (
          <div className="avatar opacity-90">
            <div
              className={`mb-8 rounded-full w-32 h-32 ${
                avatarRing
                  ? 'ring-3 ring-primary ring-offset-base-100 ring-offset-2'
                  : ''
              }`}
            >
              {
                <LazyImage
                  src={profile.avatar ? profile.avatar : FALLBACK_IMAGE}
                  alt={profile.name}
                  placeholder={skeleton({
                    widthCls: 'w-full',
                    heightCls: 'h-full',
                    shape: '',
                  })}
                />
              }
            </div>
          </div>
        )}
        <div className="text-center mx-auto px-8">
          <h5 className="font-bold text-2xl">
            {loading || !profile ? (
              skeleton({ widthCls: 'w-48', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">
                {profile.name}
              </span>
            )}
          </h5>
          <div className="mt-3 text-base-content font-mono">
            {loading || !profile
              ? skeleton({ widthCls: 'w-48', heightCls: 'h-5' })
              : profile.bio}
          </div>
        </div>
        {resumeFileUrl &&
          (loading ? (
            <div className="mt-6">
              {skeleton({ widthCls: 'w-40', heightCls: 'h-8' })}
            </div>
          ) : (
            <a
              href={resumeFileUrl}
              target="_blank"
              className="btn btn-outline btn-sm text-xs mt-6 opacity-50"
              download
              rel="noreferrer"
            >
              Download Resume
            </a>
          ))}
      </div>
    </div>
  );
};

export default AvatarCard;
