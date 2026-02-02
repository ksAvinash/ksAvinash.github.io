import { skeleton } from '../../utils';

const SkillCard = ({
  loading,
  skills,
}: {
  loading: boolean;
  skills: string[];
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 12; index++) {
      array.push(
        <div key={index}>
          {skeleton({ widthCls: 'w-16', heightCls: 'h-4', className: 'm-1' })}
        </div>,
      );
    }

    return array;
  };

  return (
    <div className="card shadow-lg card-sm bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">Skills</span>
            )}
          </h5>
        </div>
        <div className="p-3 flow-root">
          {loading ? (
            <div className="-m-1 flex flex-wrap justify-center gap-2">
              {renderSkeleton()}
            </div>
          ) : (
            <ul className="space-y-3">
              {skills.map((skill, index) => {
                const [title, details] = skill.split(':');
                return (
                  <li key={index} className="rounded-box bg-base-200/40 p-3">
                    <div className="text-sm font-semibold text-base-content">
                      {title?.trim()}
                    </div>
                    {details && (
                      <div className="mt-1 text-sm text-base-content/70">
                        {details.trim()}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
