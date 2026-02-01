import React, { Fragment } from 'react';
import { SanitizedExperience } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';

const ExperienceCard = ({
  experiences,
  loading,
}: {
  experiences: SanitizedExperience[];
  loading: boolean;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <li key={index} className="mb-8 ml-2">
          <div className="flex items-center justify-between">
            {skeleton({ widthCls: 'w-6/12', heightCls: 'h-4' })}
            {skeleton({ widthCls: 'w-4/12', heightCls: 'h-3' })}
          </div>
          <div className="mt-3 ml-2">
            <div className="relative border-l border-base-300 border-opacity-30">
              <div className="ml-4 mb-4">
                {skeleton({
                  widthCls: 'w-6/12',
                  heightCls: 'h-4',
                  className: 'my-1.5',
                })}
                {skeleton({ widthCls: 'w-5/12', heightCls: 'h-3' })}
              </div>
              <div className="ml-4">
                {skeleton({
                  widthCls: 'w-6/12',
                  heightCls: 'h-4',
                  className: 'my-1.5',
                })}
                {skeleton({ widthCls: 'w-5/12', heightCls: 'h-3' })}
              </div>
            </div>
          </div>
        </li>,
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
              <span className="text-base-content opacity-70">Experience</span>
            )}
          </h5>
        </div>
        <div className="text-base-content">
          <ol className="my-2 mx-4">
            {loading ? (
              renderSkeleton()
            ) : (
              <Fragment>
                {experiences.map((experience, index) => {
                  const roles =
                    experience.roles && experience.roles.length > 0
                      ? experience.roles
                      : experience.position
                        ? [
                            {
                              position: experience.position,
                              from: experience.from,
                              to: experience.to,
                            },
                          ]
                        : [];

                  return (
                    <li key={index} className="mb-8">
                      <div className="flex items-center justify-between">
                        <div className="font-semibold text-base-content">
                          {experience.companyLink ? (
                            <a
                              href={experience.companyLink}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {experience.company}
                            </a>
                          ) : (
                            experience.company
                          )}
                        </div>
                        <div className="text-xs text-base-content/60">
                          {experience.from} - {experience.to}
                        </div>
                      </div>

                      {roles.length > 0 && (
                        <ol className="relative border-l border-base-300 border-opacity-30 mt-3 ml-2">
                          {roles.map((role, roleIndex) => (
                            <li key={`${role.position}-${roleIndex}`} className="ml-4 mb-4">
                              <div
                                className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
                                style={{ left: '-4.5px' }}
                              ></div>
                              <div className="text-sm font-semibold text-base-content">
                                {role.position}
                              </div>
                              {(role.from || role.to) && (
                                <div className="text-xs text-base-content/60">
                                  {role.from || ''}
                                  {role.from && role.to ? ' - ' : ''}
                                  {role.to || ''}
                                </div>
                              )}
                            </li>
                          ))}
                        </ol>
                      )}
                    </li>
                  );
                })}
              </Fragment>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
