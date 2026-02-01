import { FaBuilding } from 'react-icons/fa';
import { skeleton } from '../../utils';
import { OrgContribution } from '../../interfaces/org-contribution';

const OrgContributionsCard = ({
  header,
  contributions,
  loading,
  limit,
}: {
  header: string;
  contributions: OrgContribution[];
  loading: boolean;
  limit: number;
}) => {
  if (!loading && contributions.length === 0) {
    return;
  }

  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < limit; index++) {
      array.push(
        <div className="card shadow-md card-sm bg-base-100" key={index}>
          <div className="flex items-center gap-4 p-6">
            {skeleton({ widthCls: 'w-12', heightCls: 'h-12', shape: '' })}
            <div className="flex-1">
              {skeleton({ widthCls: 'w-32', heightCls: 'h-4' })}
              <div className="mt-2">
                {skeleton({ widthCls: 'w-20', heightCls: 'h-4' })}
              </div>
            </div>
          </div>
        </div>,
      );
    }
    return array;
  };

  return (
    <div className="col-span-1 lg:col-span-2">
      <div className="card bg-base-200 shadow-xl border border-base-300">
        <div className="card-body p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div className="flex items-center space-x-3">
              {loading ? (
                skeleton({
                  widthCls: 'w-12',
                  heightCls: 'h-12',
                  className: 'rounded-xl',
                })
              ) : (
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
                  <FaBuilding className="text-2xl" />
                </div>
              )}
              <div className="min-w-0 flex-1">
                <h3 className="text-base sm:text-lg font-bold text-base-content truncate">
                  {loading
                    ? skeleton({ widthCls: 'w-48', heightCls: 'h-8' })
                    : header}
                </h3>
                <div className="text-base-content/60 text-xs sm:text-sm mt-1 truncate">
                  {loading
                    ? skeleton({ widthCls: 'w-40', heightCls: 'h-4' })
                    : 'Last 12 months by organization'}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {loading
              ? renderSkeleton()
              : contributions.map((org) => (
                  <a
                    key={org.login}
                    href={org.url}
                    target="_blank"
                    rel="noreferrer"
                    className="card shadow-md card-sm bg-base-100 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center justify-between p-6 gap-4">
                      <div className="flex items-center gap-4 min-w-0">
                        <div className="avatar">
                          <div className="w-12 rounded-full">
                            <img src={org.avatarUrl} alt={org.login} />
                          </div>
                        </div>
                        <div className="min-w-0">
                          <div className="font-semibold text-base-content truncate">
                            {org.login}
                          </div>
                          <div className="text-xs text-base-content/60 truncate">
                            {org.url.replace('https://', '')}
                          </div>
                        </div>
                      </div>
                      <div className="badge badge-primary badge-sm shrink-0">
                        {org.totalContributions} contributions
                      </div>
                    </div>
                  </a>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgContributionsCard;
