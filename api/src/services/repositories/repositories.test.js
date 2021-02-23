import {
  repositories,
  repository,
  createRepository,
  updateRepository,
  deleteRepository,
} from './repositories'

describe('repositories', () => {
  scenario('returns all repositories', async (scenario) => {
    const result = await repositories()

    expect(result.length).toEqual(Object.keys(scenario.repository).length)
  })

  scenario('returns a single repository', async (scenario) => {
    const result = await repository({ id: scenario.repository.one.id })

    expect(result).toEqual(scenario.repository.one)
  })

  scenario('creates a repository', async (scenario) => {
    const result = await createRepository({
      input: { githubId: 4789224, fullName: 'String' },
    })

    expect(result.githubId).toEqual(4789224)
    expect(result.fullName).toEqual('String')
  })

  scenario('updates a repository', async (scenario) => {
    const original = await repository({ id: scenario.repository.one.id })
    const result = await updateRepository({
      id: original.id,
      input: { githubId: 8715573 },
    })

    expect(result.githubId).toEqual(8715573)
  })

  scenario('deletes a repository', async (scenario) => {
    const original = await deleteRepository({ id: scenario.repository.one.id })
    const result = await repository({ id: original.id })

    expect(result).toEqual(null)
  })
})
