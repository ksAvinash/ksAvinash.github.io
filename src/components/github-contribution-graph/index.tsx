import { AiOutlineGithub } from 'react-icons/ai';
import { skeleton } from '../../utils';

const GithubContributionGraph = ({
  username,
  loading,
}: {
  username: string;
  loading: boolean;
}) => {
  const graphUrl = `https://ghchart.rshah.org/${username}`;

  return (
    <div className="col-span-1 lg:col-span-2">
      <div className="card bg-base-200 shadow-xl border border-base-300">
        <div className="card-body p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div className="flex items-center space-x-3">
              {loading ? (
                skeleton({
                  widthCls: 'w-12',
                  heightCls: 'h-12',
                  className: 'rounded-xl',
                })
              ) : (
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
                  <AiOutlineGithub className="text-2xl" />
                </div>
              )}
              <div className="min-w-0 flex-1">
                <h3 className="text-base sm:text-lg font-bold text-base-content truncate">
                  {loading
                    ? skeleton({ widthCls: 'w-48', heightCls: 'h-8' })
                    : 'GitHub Contribution Graph'}
                </h3>
                <div className="text-base-content/60 text-xs sm:text-sm mt-1 truncate">
                  {loading
                    ? skeleton({ widthCls: 'w-40', heightCls: 'h-4' })
                    : 'Last 12 months of activity'}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full overflow-x-auto">
            {loading ? (
              <div className="w-full">
                {skeleton({ widthCls: 'w-full', heightCls: 'h-32', shape: '' })}
              </div>
            ) : (
              <img
                src={graphUrl}
                alt="GitHub contribution graph"
                className="w-full"
                loading="lazy"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubContributionGraph;
