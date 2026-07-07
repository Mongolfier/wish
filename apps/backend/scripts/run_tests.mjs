import { spawnSync } from 'node:child_process';

function run(command, args) {
	return spawnSync(command, args, { stdio: 'inherit', shell: true });
}

const uvResult = run('uv', ['run', 'pytest', '-q']);
if (uvResult.status === 0) {
	process.exit(0);
}

const pythonResult = run('python', ['-m', 'pytest', '-q']);
process.exit(pythonResult.status ?? 1);
