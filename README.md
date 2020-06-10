# Potter Commander
Potter Commander is a microservice for execute bash commands requests by HTTP

## Installation
Clone the project and run
```bash
npm install
```

## Usage

Make a POST request using the following JSON template
```json
{
    "workdir": "/home/",
    "command": "pwd"
}
```
######Workdir is the base directory to run the command

######Command is the bash command

## License
[MIT](https://choosealicense.com/licenses/mit/)
