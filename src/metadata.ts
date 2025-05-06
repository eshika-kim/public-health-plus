/* eslint-disable */
export default async () => {
  const t = {
    ['./common/dto/abstract.dto']: await import('./common/dto/abstract.dto'),
    ['./constants/language-code']: await import('./constants/language-code'),
    ['./modules/program/entities/program.entity']: await import(
      './modules/health-supplement/entities/functional-ingredients.entity'
    ),
    ['./modules/review/entities/review.entity']: await import(
      './modules/review/entities/review.entity'
    ),
    ['./modules/program/entities/genre.entity']: await import(
      './modules/health-supplement/entities/genre.entity'
    ),
    ['./modules/program/entities/watch-provider.entity']: await import(
      './modules/health-supplement/entities/watch-provider.entity'
    ),
    ['./modules/user/entities/user.entity']: await import(
      './modules/user/entities/user.entity'
    ),
    ['./constants/role-type']: await import('./constants/role-type'),
    ['./constants/register-provider-type']: await import(
      './constants/register-provider-type'
    ),
    ['./modules/user/dtos/user.dto']: await import(
      './modules/user/dtos/user.dto'
    ),
    ['./modules/auth/dto/token-payload.dto']: await import(
      './modules/auth/dto/token-payload.dto'
    ),
    ['./constants/order']: await import('./constants/order'),
    ['./common/dto/page-meta.dto']: await import('./common/dto/page-meta.dto'),
    ['./modules/review/dtos/review.dto']: await import(
      './modules/review/dtos/review.dto'
    ),
  };
  return {
    '@nestjs/swagger/plugin': {
      models: [
        [
          import('./common/dto/abstract.dto'),
          {
            AbstractDto: {
              id: { required: true, type: () => Object },
              createdAt: { required: true, type: () => Date },
              updatedAt: { required: false, type: () => Date, nullable: true },
              deletedAt: { required: false, type: () => Date, nullable: true },
              translations: {
                required: false,
                type: () => [
                  t['./common/dto/abstract.dto'].AbstractTranslationDto,
                ],
              },
            },
            AbstractTranslationDto: {},
          },
        ],
        [
          import('./common/abstract.entity'),
          {
            AbstractEntity: {
              id: { required: true, type: () => Object },
              createdAt: { required: true, type: () => Date },
              updatedAt: { required: true, type: () => Date, nullable: true },
              deletedAt: { required: true, type: () => Date, nullable: true },
              translations: { required: false },
            },
            AbstractTranslationEntity: {
              languageCode: {
                required: true,
                enum: t['./constants/language-code'].LanguageCode,
              },
            },
          },
        ],
        [
          import('./modules/health-supplement/dtos/program.dto'),
          {
            ProgramDto: {
              originId: { required: true, type: () => Number },
              name: { required: true, type: () => String },
              overview: { required: true, type: () => String },
              originCountry: { required: true, type: () => String },
              backdropPath: { required: true, type: () => String },
              posterPath: { required: true, type: () => String },
              voteAverage: {
                required: true,
                type: () => Number,
                nullable: true,
              },
              voteCount: { required: true, type: () => Number, nullable: true },
              releaseDate: { required: true, type: () => Date },
              firstAirDate: { required: true, type: () => Date },
              genreIds: { required: false, type: () => [Object] },
              watchProviderIds: { required: false, type: () => [Object] },
            },
          },
        ],
        [
          import('./modules/health-supplement/dtos/genre.dto'),
          {
            GenreDto: {
              originId: { required: true, type: () => Number },
              name: { required: true, type: () => String },
            },
          },
        ],
        [
          import('./modules/health-supplement/entities/genre.entity'),
          {
            GenreEntity: {
              originId: { required: true, type: () => Number },
              name: { required: true, type: () => String },
              programs: {
                required: true,
                type: () => [
                  t['./modules/program/entities/program.entity'].ProgramEntity,
                ],
              },
            },
          },
        ],
        [
          import('./modules/health-supplement/dtos/watch-provider.dto'),
          {
            WatchProviderDto: {
              originId: { required: true, type: () => Number },
              name: { required: true, type: () => String },
              programIds: { required: false, type: () => [Object] },
            },
          },
        ],
        [
          import('./modules/health-supplement/entities/watch-provider.entity'),
          {
            WatchProviderEntity: {
              originId: { required: true, type: () => Number },
              name: { required: true, type: () => String },
              programs: {
                required: true,
                type: () => [
                  t['./modules/program/entities/program.entity'].ProgramEntity,
                ],
              },
            },
          },
        ],
        [
          import(
            './modules/health-supplement/entities/functional-ingredients.entity'
          ),
          {
            ProgramEntity: {
              originId: { required: true, type: () => Number },
              name: { required: true, type: () => String },
              overview: { required: true, type: () => String },
              originCountry: { required: true, type: () => String },
              originName: { required: true, type: () => String },
              backdropPath: { required: true, type: () => String },
              posterPath: { required: true, type: () => String },
              voteAverage: {
                required: true,
                type: () => Number,
                nullable: true,
              },
              voteCount: { required: true, type: () => Number, nullable: true },
              releaseDate: { required: true, type: () => Date },
              firstAirDate: { required: true, type: () => Date },
              reviews: {
                required: false,
                type: () => [
                  t['./modules/review/entities/review.entity'].ReviewEntity,
                ],
              },
              genres: {
                required: true,
                type: () => [
                  t['./modules/program/entities/genre.entity'].GenreEntity,
                ],
              },
              watchProviders: {
                required: true,
                type: () => [
                  t['./modules/program/entities/watch-provider.entity']
                    .WatchProviderEntity,
                ],
              },
            },
          },
        ],
        [
          import('./modules/review/dtos/review.dto'),
          {
            ReviewDto: {
              title: { required: false, type: () => String },
              description: { required: false, type: () => String },
              info: { required: true, type: () => String },
            },
          },
        ],
        [
          import('./modules/review/entities/review.entity'),
          {
            ReviewEntity: {
              userId: { required: true, type: () => Object },
              user: {
                required: true,
                type: () => t['./modules/user/entities/user.entity'].UserEntity,
              },
              program: {
                required: true,
                type: () =>
                  t['./modules/program/entities/program.entity'].ProgramEntity,
              },
            },
          },
        ],
        [
          import('./modules/user/dtos/user.dto'),
          {
            UserDto: {
              email: { required: false, type: () => String, nullable: true },
              nickName: { required: true, type: () => String },
              role: {
                required: false,
                enum: t['./constants/role-type'].RoleType,
              },
            },
          },
        ],
        [
          import('./modules/user/entities/user.entity'),
          {
            UserEntity: {
              email: { required: true, type: () => String },
              password: { required: false, type: () => String, nullable: true },
              nickName: { required: true, type: () => String },
              refreshToken: { required: true, type: () => String },
              registerProvider: { required: true, type: () => String },
              registerProviderToken: { required: true, type: () => String },
              profileImage: { required: true, type: () => String },
              role: {
                required: true,
                enum: t['./constants/role-type'].RoleType,
              },
              reviews: {
                required: false,
                type: () => [
                  t['./modules/review/entities/review.entity'].ReviewEntity,
                ],
              },
            },
          },
        ],
        [
          import('./modules/auth/dto/social-user-register.dto'),
          {
            SocialUserRegisterDto: {
              email: { required: true, type: () => String },
              nickName: { required: true, type: () => String },
              registerProvider: {
                required: false,
                type: () => String,
                enum: t['./constants/register-provider-type']
                  .RegisterProviderType,
              },
              registerProviderToken: { required: false, type: () => String },
              profileImage: { required: false, type: () => String },
            },
          },
        ],
        [
          import('./modules/auth/dto/user-register.dto'),
          {
            UserRegisterDto: {
              email: { required: true, type: () => String },
              password: { required: true, type: () => String },
              nickName: { required: true, type: () => String },
              profileImage: { required: false, type: () => String },
            },
          },
        ],
        [
          import('./modules/user/dtos/update-user.dto'),
          {
            UpdateUserDto: {
              email: { required: false, type: () => String, nullable: true },
              nickName: { required: false, type: () => String },
              role: {
                required: false,
                enum: t['./constants/role-type'].RoleType,
              },
              refreshToken: { required: false, type: () => String },
            },
          },
        ],
        [
          import('./modules/auth/dto/token-payload.dto'),
          {
            TokenPayloadDto: {
              accessToken: { required: true, type: () => String },
              refreshToken: { required: true, type: () => String },
            },
          },
        ],
        [
          import('./modules/auth/dto/user-login.dto'),
          {
            UserLoginDto: {
              email: { required: true, type: () => String },
              password: { required: true, type: () => String },
            },
          },
        ],
        [
          import('./modules/auth/dto/login-payload.dto'),
          {
            LoginPayloadDto: {
              user: {
                required: true,
                type: () => t['./modules/user/dtos/user.dto'].UserDto,
              },
              token: {
                required: true,
                type: () =>
                  t['./modules/auth/dto/token-payload.dto'].TokenPayloadDto,
              },
            },
          },
        ],
        [
          import('./modules/health-supplement/dtos/create-program.dto'),
          {
            CreateProgramDto: {
              watchProviderIds: { required: false, type: () => [Object] },
              genreIds: { required: false, type: () => [Object] },
              watchRegion: { required: false, type: () => String },
            },
          },
        ],
        [
          import('./common/dto/page-options.dto'),
          {
            PageOptionsDto: {
              order: { required: true, enum: t['./constants/order'].Order },
              page: { required: true, type: () => Number },
              take: { required: true, type: () => Number },
              q: { required: false, type: () => String },
            },
          },
        ],
        [
          import('./common/dto/page-meta.dto'),
          {
            PageMetaDto: {
              page: { required: true, type: () => Number },
              take: { required: true, type: () => Number },
              itemCount: { required: true, type: () => Number },
              pageCount: { required: true, type: () => Number },
              hasPreviousPage: { required: true, type: () => Boolean },
              hasNextPage: { required: true, type: () => Boolean },
            },
          },
        ],
        [
          import('./common/dto/page.dto'),
          {
            PageDto: {
              data: { required: true },
              meta: {
                required: true,
                type: () => t['./common/dto/page-meta.dto'].PageMetaDto,
              },
            },
          },
        ],
        [
          import('./modules/review/dtos/create-review.dto'),
          {
            CreateReviewDto: {
              userId: { required: false, type: () => Object },
            },
          },
        ],
        [
          import('./modules/review/dtos/update-review.dto'),
          { UpdateReviewDto: {} },
        ],
        [
          import('./common/dto/create-translation.dto'),
          {
            CreateTranslationDto: {
              languageCode: {
                required: true,
                enum: t['./constants/language-code'].LanguageCode,
              },
              text: { required: true, type: () => String },
            },
          },
        ],
        [
          import('./modules/review/dtos/review-page-options.dto'),
          { ReviewPageOptionsDto: {} },
        ],
        [
          import('./modules/user/dtos/users-page-options.dto'),
          { UsersPageOptionsDto: {} },
        ],
        [
          import('./modules/auth/dto/regenerate-access-token.dto'),
          {
            RegenerateAccessTokenDto: {
              accessToken: { required: true, type: () => String },
              refreshToken: { required: true, type: () => String },
              user: {
                required: true,
                type: () => t['./modules/user/entities/user.entity'].UserEntity,
              },
            },
          },
        ],
      ],
      controllers: [
        [
          import('./modules/user/user.controller'),
          {
            UserController: {
              admin: {},
              getUser: { type: t['./modules/user/dtos/user.dto'].UserDto },
            },
          },
        ],
        [
          import('./modules/auth/auth.controller'),
          {
            AuthController: {
              userLogin: {},
              userRegister: {},
              getCurrentUser: {
                type: t['./modules/user/dtos/user.dto'].UserDto,
              },
              googleAuth: {},
              googleAuthRedirect: {},
            },
          },
        ],
        [
          import('./modules/health-checker/health-checker.controller'),
          { HealthCheckerController: { check: { type: Object } } },
        ],
        [
          import('./modules/health-supplement/health-supplement.controller'),
          { ProgramController: { createProgram: {}, createGenreList: {} } },
        ],
        [
          import('./modules/review/review.controller'),
          {
            ReviewController: {
              createReview: {
                type: t['./modules/review/dtos/review.dto'].ReviewDto,
              },
              getReviewList: {
                type: [
                  t['./modules/review/entities/review.entity'].ReviewEntity,
                ],
              },
              getSinglePost: {
                type: t['./modules/review/dtos/review.dto'].ReviewDto,
              },
              updatePost: {},
              deletePost: {},
            },
          },
        ],
      ],
    },
  };
};
