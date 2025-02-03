FROM "node"
WORKDIR "/opt/dev-progress"
COPY . ./
COPY package*.json .
RUN npm i
EXPOSE "3000"
CMD ["sleep", "infinity"]
