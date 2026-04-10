import { useState } from 'react'
import { Plus, Trash2 } from 'lucide-react'
import { nanoid } from 'nanoid'

const App = () => {
  const [fields, setFields] = useState([])
  const [output, setOutput] = useState(null)
  const [copied, setCopied] = useState(false)

  const addField = () => {
    setFields(prev => [...prev, { id: nanoid(), key: '', value: '' }])
  }

  const removeField = (id) => {
    setFields(prev => prev.filter(item => item.id !== id))
  }

  const updateField = (id, prop, value) => {
    setFields(prev =>
      prev.map(item => item.id === id ? { ...item, [prop]: value } : item)
    )
  }

  const getDuplicateKeys = () => {
    const keys = fields.map(f => f.key).filter(k => k.trim())
    return keys.filter((k, i) => keys.indexOf(k) !== i)
  }

  const getResult = () => {
    const obj = {}
    for (const field of fields) obj[field.key] = field.value
    return obj
  }



  const handleSubmit = () => {
    const result = getResult()
    setOutput(JSON.stringify(result, null, 2))
  }

  const handleCopy = () => {
    if (!output) return
    navigator.clipboard.writeText(output).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }

  const dupes = getDuplicateKeys()

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-lg p-8 shadow-md">

        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <h1 className="text-2xl font-semibold text-center">Dynamic Input</h1>
          {fields.length > 0 && (
            <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-0.5 rounded-full">
              {fields.length}
            </span>
          )}
        </div>

        {/* Empty state */}
        {fields.length === 0 && (
          <div className="text-center py-8 text-gray-400">
            <p className="text-sm">No fields yet — add one below</p>
          </div>
        )}

        {/* Fields */}
        <div className="flex flex-col gap-3">
          {fields.map(item => (
            <div
              key={item.id}
              className="flex items-center gap-2 animate-fade-in"
            >
              <input
                className="flex-1 min-w-0 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Key"
                defaultValue={item.key}
                onChange={e => updateField(item.id, 'key', e.target.value.trim())}
              />
              <input
                className="flex-1 min-w-0 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Value"
                defaultValue={item.value}
                onChange={e => updateField(item.id, 'value', e.target.value)}
              />
              <button
                onClick={() => removeField(item.id)}
                className="flex-shrink-0 bg-rose-100 text-rose-500 hover:bg-rose-200 active:scale-95 transition-all duration-150 rounded-lg p-2"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Duplicate key warning */}
        {dupes.length > 0 && (
          <div className="mt-3 px-3 py-2 bg-amber-50 text-amber-700 text-sm rounded-lg">
            ⚠ Duplicate keys detected — only the last value will be used
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col gap-3 mt-6">
          <button
            onClick={addField}
            className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-blue-500 hover:bg-blue-600 active:scale-95 transition-all duration-150 text-white font-medium text-sm"
          >
            <Plus className="w-4 h-4" />
            Add field
          </button>

          <button
            onClick={handleSubmit}
            disabled={fields.length === 0}
            className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 active:scale-95 transition-all duration-150 text-white font-medium text-sm disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Submit
          </button>
        </div>

        {/* Output */}
        {output && (
          <div className="mt-5">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Result</span>
              <button
                onClick={handleCopy}
                className="text-xs px-3 py-1 rounded-md border border-gray-200 text-gray-500 hover:bg-gray-100 active:scale-95 transition-all duration-150"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <pre className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-xs font-mono overflow-x-auto text-gray-800">
              {output}
            </pre>
          </div>
        )}

      </div>
    </div>
  )
}

export default App