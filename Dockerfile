FROM node:16.17.0-alpine
#FROM을 통해 base image를 만든다. node는 이미지 지원. 뒤의 숫자는 버전. alpine은 작은 단위의 리눅스 명시 
WORKDIR /app
#WORKDIR은 cd를 의미. /app 디렉토리로 이미지를 복사해올 것을 지정

COPY package.json .
#COPY를 통해 /app에 파일을 복사한다. 빈번이 작성되는 것을 후순위에서 복사한다. package.json을 먼저 복사하도록 하자
#COPY package.json package-lock.json ./

RUN npm install --legacy-peer-deps yarn \
yarn install
#yarn이 아니라 기본 npm이었으면 이 시점에서 npm install 실행. yarn을 쓸 때는 우선적으로 yarn을 다운받아야 한다.
#혹은 바로 RUN yarn 을 이용할 수도 있지만 용량을 많이 잡아먹게 된다.
#npm7 버전부터 peerDependencies를 자동으로 설치하게 되는데, 이때 이미 설치되어 있는 의존성과 동일하지만 버전이 다른 peerDependencies가 존재하고 있으면 충돌이 발생한다.
#--legacy-peer-deps를 통해 peerDependencies를 무시하고 설치하도록 한다.

COPY .env.local .env

COPY . .
#소스파일들을 복사한다. 첫 번째 인자로 복사할 파일들 지정, 두 번째 인자로 복사위치 지정. 여기서는 모든 파일들을 WORKDIR로 복사. 

RUN yarn build

CMD [ "yarn", "start" ]