"""Convert the supplied scikit-learn RandomForestClassifier to browser JSON.
Usage: python convert_model.py random_forest_risk_model.pkl model/model.json
"""
import json, sys
import joblib

def main(src, dst):
    m = joblib.load(src)
    if not hasattr(m, 'estimators_') or not hasattr(m, 'feature_names_in_'):
        raise TypeError('Expected a fitted RandomForestClassifier with feature_names_in_.')
    out = {
        'format_version': 1,
        'model_type': type(m).__name__,
        'n_features': int(m.n_features_in_),
        'classes_': m.classes_.tolist(),
        'n_estimators': len(m.estimators_),
        'feature_names': [str(x) for x in m.feature_names_in_],
        'trees': []
    }
    for est in m.estimators_:
        t = est.tree_
        out['trees'].append({
            'feature': t.feature.tolist(),
            'threshold': t.threshold.tolist(),
            'left': t.children_left.tolist(),
            'right': t.children_right.tolist(),
            'value': t.value.reshape(t.node_count, -1).tolist()
        })
    with open(dst, 'w', encoding='utf-8') as f:
        json.dump(out, f, ensure_ascii=False, separators=(',', ':'))
    print(f'Wrote {dst}')

if __name__ == '__main__':
    if len(sys.argv) != 3:
        raise SystemExit('Usage: python convert_model.py INPUT.pkl OUTPUT.json')
    main(sys.argv[1], sys.argv[2])
